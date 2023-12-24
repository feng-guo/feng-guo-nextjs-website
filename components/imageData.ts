// ImageData type
export type ImageData = {
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

// Define the IMAGES constant
export const IMAGES: ImageData[] = [
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
    {
        src: 'https://i.imgur.com/NjdbLhq.jpg',
        alt: '2022 Ford Bronco Sport',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Bronco Sport',
            modelYear: 2022,
            color: 'blue'
        }
    },
    {
        src: 'https://i.imgur.com/RGd7liP.jpg',
        alt: '2019 Mazda 3',
        tags: {
            manufacturer: 'Mazda',
            modelName: '3',
            modelYear: 2019,
            color: 'blue'
        }
    },
    {
        src: 'https://i.imgur.com/roqvjyK.jpg',
        alt: 'Mazda CX-5',
        tags: {
            manufacturer: 'Mazda',
            modelName: 'CX-5',
            color: 'brown'
        }
    },
    {
        src: 'https://i.imgur.com/haJSAYd.jpg',
        alt: 'Lamborghini LM002',
        tags: {
            manufacturer: 'Lamborghini',
            modelName: 'LM002',
            color: 'silver'
        }
    },
    {
        src: 'https://i.imgur.com/stvqOWL.jpg',
        alt: '2018 Toyota Hilux',
        tags: {
            manufacturer: 'Toyota',
            modelName: 'Hilux',
            modelYear: 2018,
            color: 'white'
        }
    }
]

export const HOTWHEELS: ImageData[] = [
    {
        src: 'https://i.imgur.com/vBi6XCq.jpg',
        alt: 'Jeep Scrambler',
        tags: {
            manufacturer: 'Jeep',
            modelName: 'Scrambler',
            color: 'silver',
            series: 'Baja Blazers',
        }
    },
    {
        src: 'https://i.imgur.com/OVSbaKw.jpg',
        alt: 'Humvee',
        tags: {
            manufacturer: 'Hummer',
            modelName: 'Humvee',
            color: 'silver',
            series: 'HW First Response',
        }
    },
    {
        src: 'https://i.imgur.com/akkbkxL.jpg',
        alt: 'VolksWagen T2 Pickup',
        tags: {
            manufacturer: 'Volkswagen',
            modelName: 'T2 Pickup',
            color: 'blue',
            series: 'HW Hot Trucks',
        }
    },
    {
        src: 'https://i.imgur.com/3US7X54.jpg',
        alt: 'Ford GT40',
        tags: {
            manufacturer: 'Ford',
            modelName: 'GT40',
            color: 'white',
            series: 'Factory Fresh',
        }   
    },
    {
        src: 'https://i.imgur.com/lAAto7q.jpg',
        alt: 'Madfast',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Madfast',
            color: 'blue',
            series: 'HW Drag Strip',
        }
    },
    {
        src: 'https://i.imgur.com/3BDQrvU.jpg',
        alt: 'Donut Drifter',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Donut Drifter',
            color: 'orange',
            series: 'Sweet Rides',
        }
    },
    {
        src: 'https://i.imgur.com/Qi82zpQ.jpg',
        alt: '\'20 Dodge Charger Hellcat',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Charger Hellcat',
            color: 'purple',
            series: 'Then and Now',
        }
    },
    {
        src: 'https://i.imgur.com/0DSG3wF.jpg',
        alt: '\'69 Dodge Charger 500',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Charger 500',
            color: 'purple',
            series: 'Then and Now',
        }
    },
    {
        src: 'https://i.imgur.com/vRidZdq.jpg',
        alt: '\'57 Jeep FC',
        tags: {
            manufacturer: 'Jeep',
            modelName: 'FC',
            color: 'blue',
            series: 'Baja Blazers',
        }
    },
    {
        src: 'https://i.imgur.com/bwGb8fK.jpg',
        alt: '\'83 Chevy Silverado',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Silverado',
            color: 'black',
            series: 'HW Slammed',
        }
    },
    {
        src: 'https://i.imgur.com/MoRZLOC.jpg',
        alt: '\'64 Chevy Nova Wagon',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Nova Wagon',
            color: 'red',
            series: 'HW Wagons',
        }
    },
    {
        src: 'https://i.imgur.com/riugU1d.jpg',
        alt: '2020 Ram 1500 Rebel',
        tags: {
            manufacturer: 'Ram',
            modelName: '1500 Rebel',
            color: 'white',
            series: 'Factory Fresh',
        }
    },
    {
        src: 'https://i.imgur.com/nQU4nfy.jpg',
        alt: 'Mighty K',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Mighty K',
            color: 'blue',
            series: 'Compact Kings',
        }
    },
    {
        src: 'https://i.imgur.com/ETzXmLb.jpg',
        alt: 'Mad Manga',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Mad Manga',
            color: 'silver',
            series: 'HW Rescue',
        }
    },
    {
        src: 'https://i.imgur.com/rr9ERAA.jpg',
        alt: 'Ford F-150 Lightning Custom',
        tags: {
            manufacturer: 'Ford',
            modelName: 'F-150 Lightning',
            color: 'blue',
            series: 'HW Hot Trucks',
            other: ['custom']
        }
    },
    {
        src: 'https://i.imgur.com/qZcmBgR.jpg',
        alt: 'Batmobile',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Batmobile',
            color: 'black',
            series: 'Batman',
        }
    },
    {
        src: 'https://i.imgur.com/jJfLHeM.jpg',
        alt: 'Koenigsegg Gemera',
        tags: {
            manufacturer: 'Koenigsegg',
            modelName: 'Gemera',
            color: 'red',
            series: 'HW Exotics',
        }
    },
    {
        src: 'https://i.imgur.com/6dPsdCn.jpg',
        alt: 'Proton Saga',
        tags: {
            manufacturer: 'Proton',
            modelName: 'Saga',
            color: 'red',
            series: 'Compact Kings',
        }
    },
    {
        src: 'https://i.imgur.com/J20qwQy.jpg',
        alt: 'Mighty K',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Mighty K',
            color: 'red',
            series: 'HW Hot Trucks',
        }
    },
    {
        src: 'https://i.imgur.com/4dgHPeF.jpg',
        alt: 'Ford Bronco R',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Bronco R',
            color: 'black',
            series: 'HW Hot Trucks',
        }
    },
    {
        src: 'https://i.imgur.com/CsMjSho.jpg',
        alt: '\'88 Honda CR-X',
        tags: {
            manufacturer: 'Honda',
            modelName: 'CR-X',
            color: 'blue',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/J0FcLvr.jpg',
        alt: 'Porsche 928S Safari',
        tags: {
            manufacturer: 'Porsche',
            modelName: '928S',
            color: 'silver',
            series: 'Baja Blazers',
            other: ['safari']
        }
    },
    {
        src: 'https://i.imgur.com/7FX4EEV.jpg',
        alt: 'Porsche 911 Turbo 3.6 (964)',
        tags: {
            manufacturer: 'Porsche',
            modelName: '911 Turbo 3.6',
            color: 'black',
            series: 'Tooned',
        }
    },
    {
        src: 'https://i.imgur.com/FnqkZiF.jpg',
        alt: '1956 Corvette',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Corvette',
            color: 'blue',
            series: 'HW Screen Time',
        }
    },
    {
        src: 'https://i.imgur.com/xOivHzH.jpg',
        alt: 'Custom \'68 Camaro',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Camaro',
            color: 'blue',
            series: 'HW Slammed',
            other: ['custom']
        }
    },
    {
        src: 'https://i.imgur.com/YZ2nddw.jpg',
        alt: 'Tesla Roadster',
        tags: {
            manufacturer: 'Tesla',
            modelName: 'Roadster',
            color: 'orange',
            series: 'Then and Now',
        }
    },
    {
        src: 'https://i.imgur.com/5qcAP2V.jpg',
        alt: '\'62 Corvette',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Corvette',
            color: 'silver',
            series: 'Then and Now',
        }
    },
    {
        src: 'https://i.imgur.com/Jwp25do.jpg',
        alt: 'Mazda Autozam',
        tags: {
            manufacturer: 'Mazda',
            modelName: 'Autozam',
            color: 'white',
            series: 'HW Dream Garage',
        }
    },
    {
        src: 'https://i.imgur.com/botXpE7.jpg',
        alt: 'U.S.S. Enterprise NCC-1701',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'U.S.S. Enterprise NCC-1701',
            color: 'silver',
            series: 'HW Screen Time',
        }
    },
    {
        src: 'https://i.imgur.com/hTkIvwL.jpg',
        alt: '1956 Corvette',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Corvette',
            color: 'silver',
            series: 'HW Screen Time',
        }
    },
    {
        src: 'https://i.imgur.com/fAl9pk0.jpg',
        alt: '\'90 Acura NSX',
        tags: {
            manufacturer: 'Acura',
            modelName: 'NSX',
            color: 'yellow',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/zecVbOU.jpg',
        alt: '\'90 Honda Civic EF',
        tags: {
            manufacturer: 'Honda',
            modelName: 'Civic EF',
            color: 'red',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/AwLUtNT.jpg',
        alt: '1986 Toyota Van',
        tags: {
            manufacturer: 'Toyota',
            modelName: 'Van',
            color: 'beige',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/24LkQ26.jpg',
        alt: '\'73 Honda Civic Custom',
        tags: {
            manufacturer: 'Honda',
            modelName: 'Civic',
            color: 'green',
            series: 'HW J-Imports',
            other: ['custom']
        }
    },
    {
        src: 'https://i.imgur.com/R5WD9pG.jpg',
        alt: 'Nissan Skyline GT-R (BNR32)',
        tags: {
            manufacturer: 'Nissan',
            modelName: 'Skyline GT-R',
            color: 'white',
            series: 'HW J-Imports',
            other: ['godzilla']
        }
    },
    {
        src: 'https://i.imgur.com/XK4Rwxq.jpg',
        alt: 'Nissan Maxima Drift Car',
        tags: {
            manufacturer: 'Nissan',
            modelName: 'Maxima',
            color: 'red',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/0UqwSqz.jpg',
        alt: '2023 Nissan Z',
        tags: {
            manufacturer: 'Nissan',
            modelName: 'Z',
            color: 'blue',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/XtDurgb.jpg',
        alt: 'Subaru WRX STI',
        tags: {
            manufacturer: 'Subaru',
            modelName: 'WRX STI',
            color: 'blue',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/bYnfY07.jpg',
        alt: 'Nissan Patrol Custom',
        tags: {
            manufacturer: 'Nissan',
            modelName: 'Patrol',
            color: 'white',
            series: 'HW J-Imports',
            other: ['custom']
        }
    },
    {
        src: 'https://i.imgur.com/nI8Vhfj.jpg',
        alt: '\'17 Pagani Huayra Roadster',
        tags: {
            manufacturer: 'Pagani',
            modelName: 'Huayra Roadster',
            color: 'blue',
            series: 'HW Roadsters',
        }
    },
    {
        src: 'https://i.imgur.com/LdXbPT5.jpg',
        alt: '\'76 Chevy Chevette',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Chevette',
            color: 'blured',
            series: 'HW Drag Strip',
        }
    },
    {
        src: 'https://i.imgur.com/zceufwo.jpg',
        alt: 'Renault Sport R.S. 01',
        tags: {
            manufacturer: 'Renault',
            modelName: 'Sport R.S. 01',
            color: 'red',
            series: 'HW Turbo',
        }
    },
    {
        src: 'https://i.imgur.com/LbwIW89.jpg',
        alt: '\'70 Dodge Hemi Challenger',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Hemi Challenger',
            color: 'green',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/7RzMUpy.jpg',
        alt: '\'69 Shelby GT-500',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Shelby GT-500',
            color: 'purple',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/7HFUX15.jpg',
        alt: '\'88 Honda CR-X',
        tags: {
            manufacturer: 'Honda',
            modelName: 'CR-X',
            color: 'silver',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/DgXGwDK.jpg',
        alt: '1968 Mazda Cosmo Sport',
        tags: {
            manufacturer: 'Mazda',
            modelName: 'Cosmo Sport',
            color: 'orange',
            series: 'HW J-Imports',
        }
    },
    {
        src: 'https://i.imgur.com/FwmEPUj.jpg',
        alt: 'Corvette C7 Z06 Convertible',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Corvette C7 Z06',
            color: 'red',
            series: 'HW Roadsters',
        }
    },
    {
        src: 'https://i.imgur.com/4aaMlPM.jpg',
        alt: '\'72 Stringray Convertible',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Stringray',
            color: 'blue',
            series: 'HW Roadsters',
        }
    },
    {
        src: 'https://i.imgur.com/m0HK8hG.jpg',
        alt: '\'10 Camaro SS',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Camaro SS',
            color: 'orange',
            series: 'HW Rescue',
        }
    },
    {
        src: 'https://i.imgur.com/VBZIXfC.jpg',
        alt: '\'89 Mercedes-Benz 560 SEC AMG',
        tags: {
            manufacturer: 'Mercedes-Benz',
            modelName: '560 SEC AMG',
            color: 'black',
            series: 'HW Turbo',
        }
    },
    {
        src: 'https://i.imgur.com/0cHUGEu.jpg',
        alt: 'Pagani Zonda R',
        tags: {
            manufacturer: 'Pagani',
            modelName: 'Zonda R',
            color: 'blue',
            series: 'HW Turbo',
        }
    },
    {
        src: 'https://i.imgur.com/Mqxf3p8.jpg',
        alt: 'Lotus Sport Elise',
        tags: {
            manufacturer: 'Lotus',
            modelName: 'Sport Elise',
            color: 'yellow',
            series: 'Factory Fresh',
        }
    },
    {
        src: 'https://i.imgur.com/HPPBjmB.jpg',
        alt: 'BMW 507',
        tags: {
            manufacturer: 'BMW',
            modelName: '507',
            color: 'red',
            series: 'Factory Fresh',
        }
    },
    {
        src: 'https://i.imgur.com/omMjrHH.jpg',
        alt: 'Porsche Taycan Turbo S',
        tags: {
            manufacturer: 'Porsche',
            modelName: 'Taycan Turbo S',
            color: 'green',
            series: 'Factory Fresh',
        }
    },
    {
        src: 'https://i.imgur.com/ZEhKei9.jpg',
        alt: '\'86 Thunderbird Pro Stock',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Thunderbird',
            color: 'blue',
            series: 'HW Drag Strip',
        }
    },
    {
        src: 'https://i.imgur.com/gGwLmgU.jpg',
        alt: 'Ford Mustang Mach-E 1400',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Mustang Mach-E',
            color: 'blue',
            series: 'HW Drag Strip',
        }
    },
    {
        src: 'https://i.imgur.com/LgbO892.jpg',
        alt: 'Alfa Romeo GTV6 3.0',
        tags: {
            manufacturer: 'Alfa Romeo',
            modelName: 'GTV6',
            color: 'red',
            series: 'Retro Racers',
        }
    },
    {
        src: 'https://i.imgur.com/jylq3vX.jpg',
        alt: 'Ford Escort RS2000',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Escort RS2000',
            color: 'white',
            series: 'Retro Racers',
        }
    },
    {
        src: 'https://i.imgur.com/Cj64mGu.jpg',
        alt: 'DMC DeLorean',
        tags: {
            manufacturer: 'DMC',
            modelName: 'DeLorean',
            color: 'blue',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/p6vEcxL.jpg',
        alt: '\'80 El Camino',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'El Camino',
            color: 'blue',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/2kjTwpy.jpg',
        alt: '\'68 Mercury Cougar',
        tags: {
            manufacturer: 'Mercury',
            modelName: 'Cougar',
            color: 'blue',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/fjRXY54.jpg',
        alt: '\'69 Camaro Convertible',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Camaro',
            color: 'black',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/mszQ1UD.jpg',
        alt: 'Ford Shelby GT350R',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Shelby GT350R',
            color: 'blue',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/WvRwsG5.jpg',
        alt: '\'15 Dodge Challenger SRT',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Challenger SRT',
            color: 'blue',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/73e7INL.jpg',
        alt: 'Custom Ford Maverick',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Maverick',
            color: 'blue',
            series: 'Muscle Mania',
            other: ['custom']
        }
    },
    {
        src: 'https://i.imgur.com/Y21CQWQ.jpg',
        alt: '2017 Camaro ZL1',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Camaro ZL1',
            color: 'yellow',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/YpJc76b.jpg',
        alt: 'Chevelle SS Express',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Chevelle SS',
            color: 'black',
            series: 'Muscle Mania',
        }  
    },
    {
        src: 'https://i.imgur.com/EEeJlQQ.jpg',
        alt: 'Dodge Challenger Drift Car',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Challenger',
            color: 'red',
            series: 'HW Drift',
        }  
    },
    {
        src: 'https://i.imgur.com/3SPoeoU.jpg',
        alt: 'Volvo 240 Drift Wagon',
        tags: {
            manufacturer: 'Volvo',
            modelName: '240',
            color: 'red',
            series: 'HW Drift',
        }  
    },
    {
        src: 'https://i.imgur.com/pL19Gpv.jpg',
        alt: 'Corvette C6R',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Corvette C6R',
            color: 'blue',
            series: 'Then and Now',
        }  
    },
    {
        src: 'https://i.imgur.com/71uPrlF.jpg',
        alt: '\'20 Toyota GR Supra',
        tags: {
            manufacturer: 'Toyota',
            modelName: 'Supra',
            color: 'red',
            series: 'Then and Now',
        }  
    },
    {
        src: 'https://i.imgur.com/qpzdbRp.jpg',
        alt: 'Dodge Viper SRT10 ACR',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Viper SRT10 ACR',
            color: 'blue',
            series: 'Then and Now',
        }  
    },
    {
        src: 'https://i.imgur.com/jHKfNLP.jpg',
        alt: 'Corvette C7 Z06',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Corvette C7 Z06',
            color: 'silver',
            series: 'Then and Now',
        }  
    },
    {
        src: 'https://i.imgur.com/IXE3K6H.jpg',
        alt: '\'81 Camaro',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Camaro',
            color: 'green',
            series: 'Then and Now',
        }  
    },
    {
        src: 'https://i.imgur.com/WqhNQST.jpg',
        alt: '\'18 Camaro SS',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Camaro SS',
            color: 'green',
            series: 'Then and Now',
        }  
    },
    {
        src: 'https://i.imgur.com/Ujcu0qZ.jpg',
        alt: 'Dodge Viper RT/10',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Viper RT/10',
            color: 'purple',
            series: 'HW Roadsters',
        }  
    },
    {
        src: 'https://i.imgur.com/lYFrAGB.jpg',
        alt: 'BMW i8 Roadster',
        tags: {
            manufacturer: 'BMW',
            modelName: 'i8 Roadster',
            color: 'silver',
            series: 'HW Roadsters',
        }  
    },
    {
        src: 'https://i.imgur.com/PGfMpjc.jpg',
        alt: '1970 Pontiac Firebird',
        tags: {
            manufacturer: 'Pontiac',
            modelName: 'Firebird',
            color: 'blue',
            series: 'HW Modified',
        }  
    },
    {
        src: 'https://i.imgur.com/ErZipul.jpg',
        alt: 'LB Super Silhouette Nissan Silvia (S15)',
        tags: {
            manufacturer: 'Nissan',
            modelName: 'Silvia',
            color: 'yellow',
            series: 'HW Modified',
        }  
    },
    {
        src: 'https://i.imgur.com/Bccgox6.jpg',
        alt: '\'15 Mazda MX-5 Miata',
        tags: {
            manufacturer: 'Mazda',
            modelName: 'MX-5 Miata',
            color: 'black',
            series: 'HW Modified',
        }  
    },
    {
        src: 'https://i.imgur.com/M0B3NSM.jpg',
        alt: '\'84 Audi Sport Quattro',
        tags: {
            manufacturer: 'Audi',
            modelName: 'Sport Quattro',
            color: 'blue',
            series: 'Rally Champs',
        }  
    },
    {
        src: 'https://i.imgur.com/XT5EGjG.jpg',
        alt: '\'70 Ford Escort RS1600',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Escort RS1600',
            color: 'blue',
            series: 'Rally Champs',
        }
    },
    {
        src: 'https://i.imgur.com/TIGEeE4.jpg',
        alt: 'Audi \'90 Quattro',
        tags: {
            manufacturer: 'Audi',
            modelName: 'Quattro',
            color: 'white',
            series: 'Retor Racers',
        }
    },
    {
        src: 'https://i.imgur.com/0La6O27.jpg',
        alt: 'Matt and Debbie Hay\'s 1988 Pro Street Thunderbird',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Thunderbird',
            color: 'pink',
            series: 'HW Drag Strip',
        }
    },
    {
        src: 'https://i.imgur.com/sn73IIp.jpg',
        alt: 'Honda Civic Custom',
        tags: {
            manufacturer: 'Honda',
            modelName: 'Civic',
            color: 'white',
            series: 'HW Drag Strip',
            other: ['custom']
        }
    },
    {
        src: 'https://i.imgur.com/wwtcAFN.jpg',
        alt: '\'84 Audi Sport Quattro',
        tags: {
            manufacturer: 'Audi',
            modelName: 'Sport Quattro',
            color: 'black',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/XhEKJz0.jpg',
        alt: '\'84 Mustang SVO',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Mustang SVO',
            color: 'silver',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/or0LCfo.jpg',
        alt: '\'87 Ford Sierra Cosworth',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Sierra Cosworth',
            color: 'red',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/7crtDdi.jpg',
        alt: '\'84 Corvette',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Corvette',
            color: 'yellow',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/geL3woD.jpg',
        alt: '1988 Jeep Wagoneer',
        tags: {
            manufacturer: 'Jeep',
            modelName: 'Wagoneer',
            color: 'black',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/ZtCG1Uv.jpg',
        alt: '\'82 Toyota Supra',
        tags: {
            manufacturer: 'Toyota',
            modelName: 'Supra',
            color: 'red',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/NSSP6DB.jpg',
        alt: '\'82 Cadillac Seville',
        tags: {
            manufacturer: 'Cadillac',
            modelName: 'Seville',
            color: 'beige',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/0P3g6kI.jpg',
        alt: '\'65 Mustang 2+2 Fastback',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Mustang',
            color: 'brown',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/ULEizNG.jpg',
        alt: '\'72 Ford Gran Torino Sport',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Gran Torino Sport',
            color: 'orange',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/ubWF71Y.jpg',
        alt: '\'69 Copo Camaro',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Copo Camaro',
            color: 'yellow',
            series: 'Muscle Mania',
        }
    },
    {
        src: 'https://i.imgur.com/rPrPOsC.jpg',
        alt: 'Mazda 787B',
        tags: {
            manufacturer: 'Mazda',
            modelName: '787B',
            color: 'blue',
            series: 'Retro Racers',
        }
    },
    {
        src: 'https://i.imgur.com/o1ThsTj.jpg',
        alt: 'Shelby Cobra 427 S/C',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Shelby Cobra',
            color: 'yellow',
            series: 'Retor Racers',
        }
    },
    {
        src: 'https://i.imgur.com/QcfXern.jpg',
        alt: '\'68 Copo Camaro',
        tags: {
            manufacturer: 'Chevrolet',
            modelName: 'Copo Camaro',
            color: 'yellow',
            series: 'HW Art Cars',
        }
    },
    {
        src: 'https://i.imgur.com/Almtc5W.jpg',
        alt: 'MS-T Suzuka',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'MS-T Suzuka',
            color: 'orange',
            series: 'HW Art Cars',
        }
    },
    {
        src: 'https://i.imgur.com/DNiaNba.jpg',
        alt: '\'08 Ford Focus',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Focus',
            color: 'blue',
            series: 'HW Art Cars',
        }
    },
    {
        src: 'https://i.imgur.com/6dHNfUU.jpg',
        alt: 'Hot Wheels Ford Transit Connect',
        tags: {
            manufacturer: 'Ford',
            modelName: 'Transit Connect',
            color: 'white',
            series: 'HW Art Cars',
        }
    },
    {
        src: 'https://i.imgur.com/gVkDfUk.jpg',
        alt: '\'71 Dodge Charger',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Charger',
            color: 'red',
            series: 'HW Art Cars',
        }
    },
    {
        src: 'https://i.imgur.com/4oNqtcA.jpg',
        alt: '\'06 Pontiac GTO',
        tags: {
            manufacturer: 'Pontiac',
            modelName: 'GTO',
            color: 'black',
            series: 'HW Drag Strip',
        }
    },
    {
        src: 'https://i.imgur.com/sae06Qo.jpg',
        alt: 'Quick Bite',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Quick Bite',
            color: 'yellow',
            series: 'Sweet Rides',
        }
    },
    {
        src: 'https://i.imgur.com/VCBswrf.jpg',
        alt: 'Quick Bite',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Quick Bite',
            color: 'green',
            series: 'Sweet Rides',
        }
    },
    {
        src: 'https://i.imgur.com/BVQDzV7.jpg',
        alt: 'Trouble Decker',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Trouble Decker',
            color: 'red',
            series: 'HW Metro',
        }
    },
    {
        src: 'https://i.imgur.com/RvVYted.jpg',
        alt: 'Volkswagen "Baja Bug"',
        tags: {
            manufacturer: 'Volkswagen',
            modelName: 'Beetle',
            color: 'green',
            series: 'Mud Studs',
        }
    },
    {
        src: 'https://i.imgur.com/9kgS7fk.jpg',
        alt: 'Mitsubishi Pajero Evolution',
        tags: {
            manufacturer: 'Mitsubishi',
            modelName: 'Pajero Evolution',
            color: 'red',
            series: 'Mud Studs',
        }
    },
    {
        src: 'https://i.imgur.com/DiylI6i.jpg',
        alt: '\'70 Dodge Power Wagon',
        tags: {
            manufacturer: 'Dodge',
            modelName: 'Power Wagon',
            color: 'blue',
            series: 'Mud Studs',
        }
    },
    {
        src: 'https://i.imgur.com/s2bMKeu.jpg',
        alt: 'Batmobile',
        tags: {
            manufacturer: 'Hot Wheels',
            modelName: 'Batmobile',
            color: 'black',
            series: 'Batman',
        }
    },
    {
        src: 'https://i.imgur.com/QRLRkNH.jpg',
        alt: '\'89 Mazda Savanna RX-7 FC3S',
        tags: {
            manufacturer: 'Mazda',
            modelName: 'Savanna RX-7',
            color: 'green',
            series: 'HW: The \'80s',
        }
    },
    {
        src: 'https://i.imgur.com/0n0xNE3.jpg',
        alt: '\'95 Mazda RX-7',
        tags: {
            manufacturer: 'Mazda',
            modelName: 'RX-7',
            color: 'blue',
            series: 'HW Drift',
        }
    },
    {
        src: 'https://i.imgur.com/ek9d0hn.jpg',
        alt: '\'17 Audi RS 6 Avant',
        tags: {
            manufacturer: 'Audi',
            modelName: 'RS 6 Avant',
            color: 'green',
            series: 'HW Wagons',
        }
    },
]