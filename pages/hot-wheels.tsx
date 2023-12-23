// pages/hot-wheels.tsx
import React from 'react'
import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'

// ImageData type
type ImageData = {
    src: string,
    alt: string
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
        alt: '1970 Honda N600 Off Road'
    },
    {
        src: '/images/1984-toyota-mr2.JPG',
        alt: '1984 Toyota MR2'
    },
    {
        src: '/images/1985-porsche-911-rally.JPG',
        alt: '1985 Porsche 911 Rally'
    },
    {
        src: '/images/2016-nissan-sentra.JPG',
        alt: '2016 Nissan Sentra'
    },
    {
        src: '/images/2018-dodge-charger.JPG',
        alt: '2018 Dodge Charger'
    },
    {
        src: '/images/2019-volkswagen-beetle-convertible.JPG',
        alt: '2019 Volkswagen Beetle Convertible'
    },
    {
        src: '/images/audi-tt-rs-coupe.JPG',
        alt: 'Audi TT RS Coupe'
    },
    {
        src: '/images/ford-police-interceptor.JPG',
        alt: 'Ford Police Interceptor'
    },
    {
        src: '/images/holden-vf-commodore-ssv.JPG',
        alt: 'Holden VF Commodore SSV'
    },
    {
        src: '/images/ice-cream-king.JPG',
        alt: 'Ice Cream King'
    },
    {
        src: '/images/mercedes-amg-sl-63.JPG',
        alt: 'Mercedes-AMG SL 63'
    },
    {
        src: '/images/porsche-911-carrera-cabriolet.JPG',
        alt: 'Porsche 911 Carrera Cabriolet'
    },
    {
        src: '/images/porsche-918-spyder.JPG',
        alt: 'Porsche 918 Spyder'
    },
    {
        src: '/images/porsche-cayenne-turbo.JPG',
        alt: 'Porsche Cayenne Turbo'
    },
    {
        src: '/images/tesla-model-x.JPG',
        alt: 'Tesla Model X'
    },
    {
        src: '/images/tesla-roadster.JPG',
        alt: 'Tesla Roadster'
    }
    // Add more images as needed
]

// ImageContainer component
const ImageContainer: React.FC<HotWheelsProps> = ({ images }) => (
    <div>
        {images.map((image, index) => (
            <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={WIDTH}
                height={HEIGHT}
            />
        ))}
    </div>
)

const HotWheels: React.FC = () => {
    return (
        <div>
            <NavigationBar />
            <h1>Hot Wheels</h1>
            <ImageContainer images={IMAGES} />
        </div>
    )
}

export default HotWheels