import React from 'react'
import styles from './header.module.scss'

const navigationItems = ["00 HOME", "01 DESTINATION", "02 CREW", "03 DESTINATION"]

export default function Header() {
  return (
    <header>
      <img className={styles['logo']} src="/shared/logo.svg" alt="App logo" min-width={40} min-height={40} />
      <label htmlFor="hamburger-icon">
        <img className={styles['hamburger-icon']} src="/shared/icon-hamburger.svg" alt="click to open navigation" />
      </label>
      <input id="hamburger-icon" type="checkbox" checked={false} />
      <div className={styles['navigation-container']}>
        <img className={styles['close-navigation']} src="/shared/icon-close.svg" alt="click to close navigation" />
        <nav>
          <ul>
            {navigationItems.map((navItem, i) => (
              <li key={i}>{navItem}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
