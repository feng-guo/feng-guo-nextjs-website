// pages/hot-wheels.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'

// ImageData type
type ImageData = {
    src: string,
    alt: string,
    tags?: { 
        manufacturer?: string,
        manufacturedYear?: number,
        modelName?: string,
        modelYear?: number,
        color?: string,
        series?: string,
        carPosition?: number,
        other?: string[]
    }
}
// HotWheelsProps type
type HotWheelsProps = {
    images: ImageData[]
}

//Original 4000x6000
const WIDTH = 250*1.5
const HEIGHT = 375*1.5

// Define the IMAGES constant
const IMAGES: ImageData[] = [
    {
        src: '/images/1970-honda-n600-off-road.JPG',
        alt: '1970 Honda N600 Off Road',
        tags: {
            manufacturer: 'honda',
            modelName: 'n600',
            modelYear: 1970,
            color: 'white',
            other: ['off-road']
        }
    },
    {
        src: '/images/1984-toyota-mr2.JPG',
        alt: '1984 Toyota MR2',
        tags: {
            manufacturer: 'toyota',
            modelName: 'mr2',
            modelYear: 1984,
            color: 'blue'
        }
    },
    {
        src: '/images/1985-porsche-911-rally.JPG',
        alt: '1985 Porsche 911 Rally',
        tags: {
            manufacturer: 'porsche',
            modelName: '911',
            modelYear: 1985,
            color: 'silver',
            other: ['rally']
        }
    },
    {
        src: '/images/2016-nissan-sentra.JPG',
        alt: '2016 Nissan Sentra',
        tags: {
            manufacturer: 'nissan',
            modelName: 'sentra',
            modelYear: 2016,
            color: 'blue'
        }
    },
    {
        src: '/images/2018-dodge-charger.JPG',
        alt: '2018 Dodge Charger',
        tags: {
            manufacturer: 'dodge',
            modelName: 'charger',
            modelYear: 2018,
            color: 'black'
        }
    },
    {
        src: '/images/2019-volkswagen-beetle-convertible.JPG',
        alt: '2019 Volkswagen Beetle Convertible',
        tags: {
            manufacturer: 'volkswagen',
            modelName: 'beetle',
            modelYear: 2019,
            color: 'red',
            other: ['convertible']
        }
    },
    {
        src: '/images/audi-tt-rs-coupe.JPG',
        alt: 'Audi TT RS Coupe',
        tags: {
            manufacturer: 'audi',
            modelName: 'tt',
            modelYear: 2019,
            color: 'green',
            other: ['coupe']
        }
    },
    {
        src: '/images/ford-police-interceptor.JPG',
        alt: 'Ford Police Interceptor',
        tags: {
            manufacturer: 'ford',
            modelName: 'police interceptor',
            modelYear: 2019,
            color: 'black'
        }
    },
    {
        src: '/images/holden-vf-commodore-ssv.JPG',
        alt: 'Holden VF Commodore SSV',
        tags: {
            manufacturer: 'holden',
            modelName: 'vf commodore',
            modelYear: 2019,
            color: 'red'
        }
    },
    {
        src: '/images/ice-cream-king.JPG',
        alt: 'Ice Cream King',
        tags: {
            manufacturer: 'fantasy',
            modelName: 'ice cream king',
            color: 'pink'
        }
    },
    {
        src: '/images/mercedes-amg-sl-63.JPG',
        alt: 'Mercedes-AMG SL 63',
        tags: {
            manufacturer: 'mercedes',
            modelName: 'amg sl',
            modelYear: 2019,
            color: 'blue'
        }
    },
    {
        src: '/images/porsche-911-carrera-cabriolet.JPG',
        alt: 'Porsche 911 Carrera Cabriolet',
        tags: {
            manufacturer: 'porsche',
            modelName: '911',
            modelYear: 2019,
            color: 'red',
            other: ['cabriolet']
        }
    },
    {
        src: '/images/porsche-918-spyder.JPG',
        alt: 'Porsche 918 Spyder',
        tags: {
            manufacturer: 'porsche',
            modelName: '918',
            modelYear: 2019,
            color: 'silver'
        }
    },
    {
        src: '/images/porsche-cayenne-turbo.JPG',
        alt: 'Porsche Cayenne Turbo',
        tags: {
            manufacturer: 'porsche',
            modelName: 'cayenne',
            modelYear: 2019,
            color: 'black',
            other: ['turbo']
        }
    },
    {
        src: '/images/tesla-model-x.JPG',
        alt: 'Tesla Model X',
        tags: {
            manufacturer: 'tesla',
            modelName: 'model x',
            modelYear: 2019,
            color: 'white'
        }
    },
    {
        src: '/images/tesla-roadster.JPG',
        alt: 'Tesla Roadster',
        tags: {
            manufacturer: 'tesla',
            modelName: 'roadster',
            modelYear: 2019,
            color: 'red'
        }
    }
]

type ImageWithInfoProps = {
    image: ImageData,
    width: number,
    height: number
}

const ImageWithInfo: React.FC<ImageWithInfoProps> = ({ image, width, height }) => (
    <div style={{ minWidth: '200px', minHeight: '200px', margin: '10px' }}>
        <Image
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
        />
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
)

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

const searchImages = (searchTerm: string) => {
    return IMAGES.filter(image => {
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

    const filteredImages = searchImages(searchTerm)
    
    return (
        <div>
            <NavigationBar />
            <h1>Hot Wheels</h1>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <ImagesContainer images={filteredImages} />
        </div>
    )
}

export default HotWheels