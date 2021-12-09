import React from 'react'
import bitmoji from '../../images/bitmoji.png'
import './BitmojiStyling.css'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '../../../node_modules/@fortawesome/free-brands-svg-icons'

function Bitmoji() {
  return (
    <>
    <container className="bitmojicontainer">
      <img id="bitmoji" src={bitmoji}></img>
      <div id="social">
            <a href="https://github.com/AnielCodes" target="_blank" rel="noopener noreferrer" class="iconslink"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
            <a href="https://www.linkedin.com/in/john-castro-lopez-178494191/" target="_blank" rel="noopener noreferrer" class="iconslink"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" class="iconslink"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
        </div>
    </container>

    </>
  )
}

export default Bitmoji
