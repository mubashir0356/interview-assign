/* eslint-disable import/no-extraneous-dependencies */
import {FaShopify} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiChevronDown} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import './index.css'

const Navbar = () => (
  <>
    <nav className="mobile-navbar">
      <div className="logo-container">
        <FaShopify className="logo" />
        <p className="logo-title">shopify</p>
      </div>
      <div className="nav-mobile-content">
        <p className="start-free-trial"> Start free trial</p>
        <Popup
          modal
          className="popup-content"
          trigger={
            <button className="nav-button" type="button">
              <GiHamburgerMenu color="black" size={22} />
            </button>
          }
        >
          {close => (
            <div className="menu-options">
              <button
                className="nav-close-btn"
                onClick={() => close()}
                type="button"
              >
                <IoMdClose size={20} color="black" />
              </button>
              <ul className="nav-list">
                <li className="nav-item">
                  <p className="option">Solutions</p>
                  <FiChevronDown />
                </li>
                <li className="nav-item">
                  <p className="option">Pricing</p>
                </li>
                <li className="nav-item">
                  <p className="option">Resources</p>
                  <FiChevronDown />
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </nav>
    <nav className="desktop-navbar">
      <div className="logo-and-nav-content">
        <div className="logo-container">
          <FaShopify className="logo" />
          <p className="logo-title">shopify</p>
        </div>
        <ul className="nav-desktop-list">
          <li className="nav-item">
            <p className="option">Solutions</p>
            <FiChevronDown />
          </li>
          <li className="nav-item">
            <p className="option">Pricing</p>
          </li>
          <li className="nav-item">
            <p className="option">Resources</p>
            <FiChevronDown />
          </li>
        </ul>
      </div>
      <div className="desktop-nav-buttons">
        <button type="button" className="login-btn">
          Log in
        </button>
        <p className="free-trial-btn"> Start free trial</p>
      </div>
    </nav>
  </>
)

export default Navbar
