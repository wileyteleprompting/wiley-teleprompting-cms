import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">

        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
             <img
            src={logo}
            alt="Wiley Teleprompting"
            style={{ width: '14em', height: '10em' }}
          />

              <div className="column is-2 social">
                <a title="facebook" href="https://www.facebook.com/WileyTeleprompting/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                    target="_blank" rel="noopener noreferrer"
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/wileyteleprompting/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                    target="_blank" rel="noopener noreferrer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
