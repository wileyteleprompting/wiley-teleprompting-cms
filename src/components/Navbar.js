import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Logo from './Logo'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navblack navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: '550px' }} /> */}
              <Logo />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-right">
              {/* <Link className="navbar-item" to="/about">
                Services
              </Link>
              <Link className="navbar-item" to="/products">
                Photos
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Prompter
              </Link> */}
            </div>
            <div className="navbar-end has-text-right">
              <Link className="navbar-item" to="/services">
                Services
              </Link>
              <Link className="navbar-item" to="/photos">
                Photos
              </Link>
              <Link className="navbar-item" to="/testimonials">
                Testimonials
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Prompter
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
