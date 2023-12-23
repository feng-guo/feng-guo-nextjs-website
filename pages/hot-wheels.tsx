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
        src: 'https://i.imgur.com/Nqfm3TF.jpg',
        alt: '1970 Honda N600 Off Road',
        tags: {
            manufacturer: 'Honda',
            modelName: 'N600',
            modelYear: 1970,
            color: 'white',
            other: ['off-road']
        }
    },
    {
        src: 'https://i.imgur.com/5dwiHuj.jpg',
        alt: '1984 Toyota MR2',
        tags: {
            manufacturer: 'Toyota',
            modelName: 'MR2',
            modelYear: 1984,
            color: 'blue'
        }
    },
    {
        src: 'https://i.imgur.com/rZcPkyK.jpg',
        alt: '1985 Porsche 911 Rally',
        tags: {
            manufacturer: 'Porsche',
            modelName: '911',
            modelYear: 1985,
            color: 'silver',
            other: ['rally']
        }
    },
    {
        src: 'https://i.imgur.com/EmarprK.jpg',
        alt: '2016 Nissan Sentra',
        tags: {
            manufacturer: 'Nissan',
            modelName: 'Sentra',
            modelYear: 2016,
            color: 'blue'
        }
    },
    {
        src: 'https://i.imgur.com/LYofijB.jpg',
        alt: '2018 Dodge Charger',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Charger',
            modelYear: 2018,
            color: 'black'
        }
    },
    {
        src: 'https://i.imgur.com/HgWmS9B.jpg',
        alt: '2019 Volkswagen Beetle Convertible',
        tags: {
            manufacturer: 'Volkswagen',
            modelName: 'Beetle',
            modelYear: 2019,
            color: 'red',
            other: ['convertible']
        }
    },
    {
        src: 'https://i.imgur.com/bntNPYo.jpg',
        alt: '1976 Volkswagen Golf GTI MK1',
        tags: {
            manufacturer: 'Volkswagen',
            modelName: 'Golf GTI MK1',
            modelYear: 1976,
            color: 'green'
        }
    },
    {
        src: 'https://i.imgur.com/N7IJWxl.jpg',
        alt: 'Audi TT RS Coupe',
        tags: {
            manufacturer: 'Audi',
            modelName: 'TT RS',
            modelYear: 2019,
            color: 'green',
            other: ['coupe']
        }
    },
    {
        src: 'https://i.imgur.com/k9Zay1q.jpg',
        alt: 'Ford Police Interceptor',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Police Interceptor',
            modelYear: 2019,
            color: 'silver'
        }
    },
    {
        src: 'https://i.imgur.com/gJndvas.jpg',
        alt: 'Holden VF Commodore SSV',
        tags: {
            manufacturer: 'Holden',
            modelName: 'VF Commodore',
            modelYear: 2019,
            color: 'red'
        }
    },
    {
        src: 'https://i.imgur.com/DxjqQS9.jpg',
        alt: 'Ice Cream King',
        tags: {
            manufacturer: 'Matchbox',
            modelName: 'Ice Cream King',
            color: 'pink'
        }
    },
    {
        src: 'https://i.imgur.com/ITMXCub.jpg',
        alt: 'Mercedes-AMG SL 63',
        tags: {
            manufacturer: 'Mercedes',
            modelName: 'AMG SL 63',
            modelYear: 2019,
            color: 'blue'
        }
    },
    {
        src: 'https://i.imgur.com/EBsNI59.jpg',
        alt: 'Porsche 911 Carrera Cabriolet',
        tags: {
            manufacturer: 'Porsche',
            modelName: '911',
            modelYear: 2019,
            color: 'blue',
            other: ['cabriolet']
        }
    },
    {
        src: 'https://i.imgur.com/8b4lDzs.jpg',
        alt: 'Porsche 918 Spyder',
        tags: {
            manufacturer: 'Porsche',
            modelName: '918 Spyder',
            modelYear: 2019,
            color: 'yellow'
        }
    },
    {
        src: 'https://i.imgur.com/Q9Kzfv4.jpg',
        alt: 'Porsche Cayenne Turbo',
        tags: {
            manufacturer: 'Porsche',
            modelName: 'Cayenne',
            modelYear: 2019,
            color: 'blue',
            other: ['turbo']
        }
    },
    {
        src: 'https://i.imgur.com/Ie7JbT6.jpg',
        alt: 'Tesla Model X',
        tags: {
            manufacturer: 'Tesla',
            modelName: 'Model X',
            modelYear: 2019,
            color: 'silver'
        }
    },
    {
        src: 'https://i.imgur.com/8cbCft9.jpg',
        alt: 'Tesla Roadster',
        tags: {
            manufacturer: 'Tesla',
            modelName: 'Roadster',
            modelYear: 2019,
            color: 'silver'
        }
    },
    {
        src: 'https://i.imgur.com/0TpFb1V.jpg',
        alt: '2020 Land Rover Defender 90',
        tags: {
            manufacturer: 'Land Rover',
            modelName: 'Defender 90',
            modelYear: 2020,
            color: 'brown'
        }
    },
    {
        src: 'https://i.imgur.com/fN48sya.jpg',
        alt: '1994 Mitsubishi 3000GT',
        tags: {
            manufacturer: 'Mitsubishi',
            modelName: '3000GT',
            modelYear: 1994,
            color: 'red'
        }
    },
    {
        src: 'https://i.imgur.com/YtpQY8T.jpg',
        alt: '\'16 Chevy Camaro Convertible',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Camaro',
            modelYear: 2016,
            color: 'yellow',
            other: ['convertible']
        }
    },
    {
        src: 'https://i.imgur.com/f3ieV9J.jpg',
        alt: '1992 Mazda Autozam AZ-1',
        tags: {
            manufacturer: 'Mazda',
            modelName: 'Autozam AZ-1',
            modelYear: 1992,
            color: 'blue'
        }
    },
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