import styles from '@styles/header/header.module.scss'
import { navigationItems } from './navigation-items'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function Header() {

  const currentLocation = useLocation().pathname
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const hamburgerMenuToggle: React.MutableRefObject<HTMLInputElement | null> = useRef(null)

  useEffect(() => {
    if (hamburgerMenuToggle.current && hamburgerMenuToggle.current.checked) {
      hamburgerMenuToggle.current.checked = false
    }
  }, [currentLocation])

  // handle specific tag rendering depending on window dimensions
  let isTabletWidth = windowWidth >= 768 ? true : false
  let isDesktopWidth = windowWidth >= 1440 ? true : false
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  });

  return (
    <header>
      { !isTabletWidth ? <input type="checkbox" id="hamburger-menu-toggle" ref={ hamburgerMenuToggle } /> : '' }

      <div className={ styles['header-icons-container'] }>
        <Link className={ styles['header-logo-container'] } to='/' title='Home'>
          <img className={ styles['logo'] } src="/shared/logo.svg" alt="App logo" width={40} height={40} />
        </Link>

        { !isTabletWidth ?
          <label htmlFor="hamburger-menu-toggle">
            <img
              className={ styles['hamburger-icon'] }
              src="/shared/icon-hamburger.svg"
              alt="click to open navigation"
              width={24}
              height={21}
            />
          </label> : ''
        }

      </div>
      { isDesktopWidth ? <div className={ styles['header-desktop-decoration'] }></div> : '' }
      <div className={styles['navigation-container']}>
        { !isTabletWidth ?
          <label htmlFor="hamburger-menu-toggle" className={ styles['close-navigation-label'] }>
            <img
              className={ styles['close-navigation'] }
              src="/shared/icon-close.svg"
              alt="click to close navigation"
              width={19}
              height={19}
            />
          </label> : ''
        }

        <nav>
          <ul>
            { navigationItems.map((navItem, i) => (
              <li key={i}>
                <Link to={navItem.navLink} title={navItem.navTitle.toLowerCase()}>
                  <span className={ styles['navigation-item-number']}>{navItem.groupNumber }</span> {navItem.navTitle}
                </Link>
                <div className={ styles[`navigation-item__${currentLocation === navItem.navLink ? 'active' : 'hover'}`] }></div>
              </li>
            )) }
          </ul>
        </nav>

      </div>
    </header>
  )
}
