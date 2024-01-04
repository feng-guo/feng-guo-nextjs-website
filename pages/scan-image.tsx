import React, { useState } from 'react'
import Tesseract from 'tesseract.js'

const ScanImagePage = () => {
    const [imageUrl, setImageUrl] = useState('')
    const [imageData, setImageData] = useState(null)
    const [scanResult, setScanResult] = useState('')

    const handleScan = async () => {
        // Create a new image object
        const image = new Image()
        
        // Set the crossOrigin attribute
        image.crossOrigin = 'anonymous'
        
        // Return a promise that resolves when the image has loaded
        const loadImage = new Promise((resolve, reject) => {
            image.onload = () => resolve(image)
            image.onerror = reject
            image.src = imageUrl
        })

        // Wait for the image to load
        await loadImage

        // Create a canvas and draw the image onto it
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0, image.width, image.height)
    
        // Convert the image to grayscale and increase contrast
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < imageData.data.length; i += 4) {
            const grayscale = imageData.data[i] * 0.3 + imageData.data[i + 1] * 0.59 + imageData.data[i + 2] * 0.11
            imageData.data[i] = grayscale // Red
            imageData.data[i + 1] = grayscale // Green
            imageData.data[i + 2] = grayscale // Blue
            imageData.data[i + 3] = imageData.data[i + 3] // Alpha
        }
        ctx.putImageData(imageData, 0, 0)
    
        // Get a base64 data URL of the image
        const base64DataUrl = canvas.toDataURL('image/jpeg')
        
        const { data: { text, blocks } } = await Tesseract.recognize(base64DataUrl, 'eng')
        setImageData(blocks)
        setScanResult(text)
    }

    return (
        <div>
            <input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            <button onClick={handleScan}>Scan Image</button>
            <div style={{ position: 'relative' }}>
                <img src={imageUrl} alt="Scanned" />
                {imageData && imageData.map(({ text, bbox }, index) => (
                    <div
                        key={index}
                        style={{
                            border: '2px solid red',
                            position: 'absolute',
                            width: bbox.w,
                            height: bbox.h,
                            top: bbox.y,
                            left: bbox.x,
                            pointerEvents: 'none',
                        }}
                        title={text}
                    />
                ))}
            </div>
            <div>
                <h2>Scan Result:</h2>
                <p>{scanResult}</p>
            </div>
        </div>
    )
}

export default ScanImagePage