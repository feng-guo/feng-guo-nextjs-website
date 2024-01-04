import axios from 'axios'
import * as Tesseract from 'tesseract.js'
import { CollectedItemData } from './imageData'

export async function extractDataFromImage(url: string): Promise<CollectedItemData> {
    // Fetch the image
    const response = await axios.get(url, { responseType: 'blob' })
    const imageBlob = response.data

    // Create an off-screen image element
    const image = document.createElement('img')
    image.src = URL.createObjectURL(imageBlob)

    // Wait for the image to load
    await new Promise((resolve) => {
        image.onload = resolve
    })

    // Define the bounding box coordinates
    const x = 1500
    const y = 5300
    const width = 1000
    const height = 500

    // Create a new canvas for the bounding box
    const bboxCanvas = document.createElement('canvas')
    const bboxContext = bboxCanvas.getContext('2d')
    bboxCanvas.width = width
    bboxCanvas.height = height

    // Draw the bounding box portion of the image onto the new canvas
    bboxContext.drawImage(image, x, y, width, height, 0, 0, width, height)

    // Perform OCR with Tesseract.js on the bounding box
    const { data: { text } } = await Tesseract.recognize(bboxCanvas, 'eng')

    // Parse the text to extract 'alt' and 'series'
    console.log(text)
    const [alt, series] = text.split('\n')

    // Return the data
    return {
        src: url,
        alt,
        tags: { series }
    }
}