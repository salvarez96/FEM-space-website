import { homeCopies } from '@copies'
import styles from '@styles/pages/home.module.scss'

export default function Home() {
  return (
    <div className={ styles['parent-container'] }>
      <div className={ styles['home-container'] }>
        <section className={ styles['titles-container'] }>
          <h6>{ homeCopies['subtitle'] }</h6>
          <h1>{ homeCopies['title'] }</h1>
        </section>
        <section className={`${styles['main-content-container']}  main-text-container` }>
          <p>{ homeCopies['main-content'] }</p>
        </section>
      </div>
      <button className={ styles['home-button'] } type="button">Explore</button>
    </div>
  )
}
