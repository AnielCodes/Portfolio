import React from 'react'
import './navStyling.css'


function Nav() {
  return (
    <>
        <container id="navbar">
            <nav>
              <ul>
                <li><a href="#" class="navlink">Home</a></li>
                <li><a href="#" class="navlink">News</a></li>
                <li><a href="#" class="navlink">Contact</a></li>
                <li><a href="#" class="navlink">About</a></li>
              </ul>
            </nav>
        </container>
    </>
  )
}

export default Nav
