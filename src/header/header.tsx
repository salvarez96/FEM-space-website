import React from 'react'
import styles from './header.module.scss'
import { navigationItems } from './navigation-items'

// const navigationItems = ["00 HOME", "01 DESTINATION", "02 CREW", "03 DESTINATION"]

export default function Header() {
  return (
    <header min-heigth={96}>
      <div className={styles['header-icons-container']}>
        <img className={styles['logo']} src="/shared/logo.svg" alt="App logo" width={40} height={40} />
        <label htmlFor="hamburger-menu-toggle">
          <img className={styles['hamburger-icon']} src="/shared/icon-hamburger.svg" alt="click to open navigation" width={24} height={21} />
        </label>
      </div>
      <input type="checkbox" id="hamburger-menu-toggle" />
      <div className={styles['navigation-container']}>
        <img className={styles['close-navigation']} src="/shared/icon-close.svg" alt="click to close navigation" width={19} height={19} />
        <nav>
          <ul>
            {navigationItems.map((navItem, i) => (
              <li key={i}><span className={styles['navigation-item-number']}>{navItem.groupNumber}</span> {navItem.navTitle}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
