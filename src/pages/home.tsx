import { homeCopies } from '@copies'
import styles from '@styles/pages/home.module.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className={ styles['parent-container'] }>
      <div className={ styles['home-container'] }>
        <section className={ styles['titles-container'] }>
          <h6>{ homeCopies['subtitle'] }</h6>
          <h1>{ homeCopies['title'] }</h1>
        </section>
        <section className={`${styles['main-content-container']}  main-text-container` }>
          <p>{ homeCopies['mainContent'] }</p>
        </section>
      </div>
      <Link to='/destination' className={ styles['home-button'] }><span>Explore</span></Link>
    </main>
  )
}
