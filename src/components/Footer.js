import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__itemsContainer'>
            <div>
              <p>About Me</p>
            </div>

            <div>
              <p>Meals 4 NYC </p>
            </div>
            <div className='footer__socialLinks'>
                <GitHubIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
            </div>

        </div>
    </div>
  )
}

export default Footer