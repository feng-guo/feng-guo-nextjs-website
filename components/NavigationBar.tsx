import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} href="/">Home</Nav.Link>
                    <Nav.Link as={Link} href="/#about">About me</Nav.Link>
                    <Nav.Link as={Link} href="/#skills">Skills</Nav.Link>
                    <Nav.Link as={Link} href="/#projects">Projects</Nav.Link>
                    <Nav.Link as={Link} href="/#experience">Experience</Nav.Link>
                    <Nav.Link as={Link} href="/#education">Education</Nav.Link>
                    <Nav.Link as={Link} href="/hot-wheels">Hot Wheels</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar