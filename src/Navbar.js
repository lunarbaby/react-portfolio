import React from 'react'
import './index.css'

const Navbar = () =>  {
    return(
        <nav>
            <div className="nav-wrapper deep-purple darken-4">
                <ul className="right">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    </ul>
            </div>
        </nav>
        )
    
}

export default Navbar