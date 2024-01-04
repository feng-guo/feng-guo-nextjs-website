// pages/hot-wheels.tsx
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'

import { extractDataFromImage } from '../components/imageProcessing'
import { CollectedItemData, HOTWHEELS, IMAGES } from '../components/imageData'

// HotWheelsProps type
type HotWheelsProps = {
    images: CollectedItemData[]
}

//Original 4000x6000
const WIDTH = 250*1.5
const HEIGHT = 375*1.5

type ImageWithInfoProps = {
    image: CollectedItemData,
    width: number,
    height: number
}

const ImageWithInfo: React.FC<ImageWithInfoProps> = ({ image, width, height }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [renderToLeft, setRenderToLeft] = useState(false)
    const parentRef = useRef(null)
  
    return (
      <div 
        ref={parentRef}
        style={{ 
          position: 'relative', 
          minWidth: '200px', 
          minHeight: '200px', 
          margin: '10px',
          display: 'inline-block', 
        }}
        onMouseEnter={() => {
          const parentRect = parentRef.current.getBoundingClientRect()
          const wouldOverflow = parentRect.right + 250 > window.innerWidth
          setIsHovered(true)
          setRenderToLeft(wouldOverflow)
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className='image'
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
        />
        {isHovered && (
          <div className={`image-info ${renderToLeft ? 'left' : 'right'}`}>
            <p>{image.alt}</p>
            {image.tags && (
              <ul>
                {image.tags.manufacturer && <li>Manufacturer: {image.tags.manufacturer}</li>}
                {image.tags.manufacturedYear && <li>Manufactured Year: {image.tags.manufacturedYear}</li>}
                {image.tags.modelName && <li>Model Name: {image.tags.modelName}</li>}
                {image.tags.modelYear && <li>Model Year: {image.tags.modelYear}</li>}
                {image.tags.color && <li>Color: {image.tags.color}</li>}
                {image.tags.series && <li>Series: {image.tags.series}</li>}
                {image.tags.carPosition && <li>Car Position: {image.tags.carPosition}</li>}
                {image.tags.other && <li>Other: {image.tags.other.join(', ')}</li>}
              </ul>
            )}
          </div>
        )}
      </div>
    )
}

// ImageContainer component
const ImagesContainer: React.FC<HotWheelsProps> = ({ images }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map((image, index) => (
            <ImageWithInfo
                key={index}
                image={image}
                width={WIDTH}
                height={HEIGHT}
            />
        ))}
    </div>
)

const searchImages = (searchTerm: string, images: Array<CollectedItemData>) => {
    return images.filter(image => {
        if (image.alt.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true
        }

        if (image.tags) {
            for (let key in image.tags) {
                const value = image.tags[key]

                if (Array.isArray(value)) {
                    if (value.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
                        return true
                    }
                } else if (value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true
                }
            }
        }

        return false
    })
}

const HotWheels: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [useHotWheels, setUseHotWheels] = useState(true)
  const [imageUrl, setImageUrl] = useState('')
  const [images, setImages] = useState(useHotWheels ? HOTWHEELS : IMAGES)

  useEffect(() => {
      setImages(useHotWheels ? HOTWHEELS : IMAGES)
  }, [useHotWheels])

  const filteredImages = searchImages(searchTerm, images)

  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
      const data = await extractDataFromImage(imageUrl)
      console.log(data)
      if (data.src && data.alt) {
          setImages(prevImages => [...prevImages, data])
      }
  }

  return (
      <div>
          <NavigationBar />
          <h1>Hot Wheels</h1>
          <button onClick={() => setUseHotWheels(!useHotWheels)}>
              Toggle Images
          </button>
          <form onSubmit={handleSubmit}>
              <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL" />
              <button type="submit">Add Image</button>
          </form>
          <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search" />
          <ImagesContainer images={filteredImages} />
      </div>
  )
}

export default HotWheels