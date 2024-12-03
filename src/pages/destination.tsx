import styles from '@styles/pages/destination.module.scss'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { transformToUrlString, checkCurrentUrl } from '@helpers'
import { useCopyToRender } from '@hooks/useCopyToRender'

export default function Destination() {

  let { destinationName } = useParams()
  const currentLocation = useLocation().pathname
  const [ destinationToRender, destinationCopies ] = useCopyToRender('destinationCopies', destinationName)

  return (
    <div className={styles['destination-page-container']}>
      <section className={styles['destination-complimentary-container']}>
        <h5 className={styles['destination-subheading']}><span>01</span>PICK YOUR DESTINATION</h5>
        <img className={ styles['destination-image'] } src={destinationToRender.image} alt={destinationToRender.name + ' image'} />
      </section>
      <section className={styles['destination-main-container']}>
        <nav className={styles['destination-navigation']}>
          <ul>
            {destinationCopies.map(({ name }, index) => (
              <li key={name}>
                <NavLink
                  className={ checkCurrentUrl(name, index, currentLocation, '/destination') ? styles['navigation-link__active'] : '' }
                  to={'/destination/' + transformToUrlString(name)}
                >{name}</NavLink>
                <div className={ styles[`navigation-item__${checkCurrentUrl(name, index, currentLocation, '/destination') ? 'active' : 'hover'}`] }></div>
              </li>
            ))}
          </ul>
        </nav>
        <h2 className={styles['destination-heading']}>{destinationToRender.name}</h2>
        <p className={styles['main-content']}>{destinationToRender['mainContent']}</p>
        <div className={styles['decorator']}></div>
        <article className={styles['additional-facts-container']}>
          <div className={styles["additional-facts"]}>
            <p className={styles["additional-facts-title"]}>avg. distance</p>
            <p className={styles["additional-facts-fact"]}>{destinationToRender.additionalFacts?.averageDistance}</p>
          </div>
          <div className={styles["additional-facts"]}>
            <p className={styles["additional-facts-title"]}>est. travel time</p>
            <p className={styles["additional-facts-fact"]}>{destinationToRender.additionalFacts?.travelTime}</p>
          </div>
        </article>
      </section>
    </div>
  )
}
