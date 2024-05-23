import React, { useContext } from 'react'
import { ThemeContex } from '../context/ThemeContex'

const Navbar = () => {
    const { theme } = useContext(ThemeContex)
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ fontFamily: "monospace" }}>Fenty Beauty</h1>
        </div>
    )
}

export default Navbar
