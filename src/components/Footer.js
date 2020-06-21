import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="columns is-centered">
          <Link to="/" title="Wiley Teleprompting">
            <img
              src={logo}
              alt="Wiley Teleprompting"
              className="footer-logo is-narrow"
            />
          </Link>

          <div className="column is-2 social">
            <a
              title="facebook"
              href="https://www.facebook.com/WileyTeleprompting/"
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
            <a
              title="instagram"
              href="https://www.instagram.com/wileyteleprompting/"
            >
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
      </footer>
    );
  }
}

export default Footer
