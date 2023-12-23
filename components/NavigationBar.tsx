import React from 'react'
import Link from 'next/link'
import styles from './NavigationBar.module.css'

const NavigationBar: React.FC = () => {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About me</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/hot-wheels">Hot Wheels</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar