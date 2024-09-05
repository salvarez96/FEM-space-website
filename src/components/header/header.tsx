import styles from '@styles/header/header.module.scss'
import { navigationItems } from './navigation-items'

export default function Header() {
  return (
    <header min-height={96}>
      <input type="checkbox" id="hamburger-menu-toggle" />

      <div className={styles['header-icons-container']}>
        <img className={styles['logo']} src="/shared/logo.svg" alt="App logo" width={40} height={40} />
        <label htmlFor="hamburger-menu-toggle">
          <img className={styles['hamburger-icon']} src="/shared/icon-hamburger.svg" alt="click to open navigation" width={24} height={21} />
        </label>
      </div>

      <div className={styles['navigation-container']}>
        <label htmlFor="hamburger-menu-toggle" className={styles['close-navigation-label']}>
          <img className={styles['close-navigation']} src="/shared/icon-close.svg" alt="click to close navigation" width={19} height={19} />
        </label>
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
