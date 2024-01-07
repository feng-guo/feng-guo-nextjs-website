// pages/hot-wheels.tsx
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'
import axios from 'axios'

import { ImageData, HOTWHEELS, MATCHBOX, CARS_2022, CARS_2023, CARS_2024, ALL, CARS_TEST } from '../components/imageData'

// HotWheelsProps type
type HotWheelsProps = {
    images: ImageData[]
}

//Original 4000x6000
const WIDTH = 250*1.5
const HEIGHT = 375*1.5

type ImageWithInfoProps = {
    image: ImageData,
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
                {image.tags.seriesPosition && <li>Series: {image.tags.seriesPosition}</li>}
                {image.tags.yearPosition && <li>Car Position: {image.tags.yearPosition}</li>}
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

const searchImages = (searchTerm: string, images: Array<ImageData>) => {
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
    const [useAll, setUseAll] = useState(false)
    const [selectedArray, setSelectedArray] = useState(HOTWHEELS)

    const images = useAll ? ALL : selectedArray
    const filteredImages = searchImages(searchTerm, images)
    
    const handleToggle = () => {
      setUseAll(!useAll)
    }

    const [userImages, setUserImages] = useState<ImageData[]>([])

    const [imageUrl, setImageUrl] = useState('')

    const handleImageUrlChange = (event) => {
      setImageUrl(event.target.value)
    }

    const handleImageSubmit = async (event) => {
      event.preventDefault()

      try {
        const response = await axios.post('https://api.kolikoli.me/process_image', {
          url: imageUrl,
        })

        setUserImages([...userImages, response.data])
        setImageUrl('')
      } catch (error) {
        console.error(error)
      }
    }

    const handleSelect = (event) => {
      switch (event.target.value) {
        case 'Hot Wheels':
          setSelectedArray(HOTWHEELS)
          break
        case 'Matchbox':
          setSelectedArray(MATCHBOX)
          break
        case '2022 Cars':
          setSelectedArray(CARS_2022)
          break
        case '2023 Cars':
          setSelectedArray(CARS_2023)
          break
        case '2024 Cars':
          setSelectedArray(CARS_2024)
          break
        case 'Test Owned':
          setSelectedArray(CARS_TEST)
          break
        case 'User Submitted':
          setSelectedArray(userImages)
          break
        default:
          setSelectedArray(HOTWHEELS)
      }
    }

    return (
      <div>
        <NavigationBar />
        <h1>Hot Wheels</h1>
        <button onClick={handleToggle}>
          {useAll ? 'Use selected' : 'Use all'}
        </button>
        {!useAll && (
          <select onChange={handleSelect}>
            <option>Hot Wheels</option>
            <option>Matchbox</option>
            <option>2022 Cars</option>
            <option>2023 Cars</option>
            <option>2024 Cars</option>
            <option>Test Owned</option>
            {userImages.length > 0 && <option>User Submitted</option>}
          </select>
        )}
        <form onSubmit={handleImageSubmit}>
          <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
          <button type="submit">Submit Image</button>
        </form>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <ImagesContainer images={filteredImages} />
      </div>
    )
}

export default HotWheels