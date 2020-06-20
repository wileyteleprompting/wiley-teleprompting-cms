import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import LogoMobile from './LogoMobile'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      width: null,
    }
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ width: window.innerWidth });
    console.log('window.innerWidth', window.innerWidth, 'width state', this.state.width)
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
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="vertical-logo" title="Wiley Teleprompting">
              {/* <img src={logo} alt="Kaldi" style={{ width: '550px' }} /> */}
              {this.state.width > 525 ? <Logo /> : <LogoMobile />}
            </Link>
    
            {/* Hamburger menu */}
            <div
              tabIndex="0"
              className={`navbar-burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menu"
              onClick={() => this.toggleHamburger()}
              onKeyPress={() => this.toggleHamburger()}
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
