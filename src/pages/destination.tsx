import { destinationCopies } from '@copies'
import styles from '@styles/pages/destination.module.scss'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { transformToUrlString, checkCurrentUrl } from '@helpers'

export default function Destination() {

  let { destinationName } = useParams()
  const currentLocation = useLocation().pathname
  const [ destinationToRender, setDestinationToRender ] = useState(destinationCopies[0])

  useEffect(() => {
    destinationCopies.find(destination => {
      if (transformToUrlString(destination.heading) === destinationName) {
        setDestinationToRender(destination)
        return true
      }
    })
  }, [destinationName])

  return (
    <div className={styles['destination-page-container']}>
      <section className={styles['destination-complimentary-container']}>
        <h5 className={styles['destination-subheading']}><span>01</span>PICK YOUR DESTINATION</h5>
        <img className={ styles['destination-image'] } src={destinationToRender.image} alt={destinationToRender.heading + ' image'} />
      </section>
      <section className={styles['destination-main-container']}>
        <nav className={styles['destination-navigation']}>
          <ul>
            {destinationCopies.map(({ heading }, index) => (
              <li key={heading}>
                <NavLink
                  className={ checkCurrentUrl(heading, index, currentLocation, '/destination') ? styles['navigation-link__active'] : '' }
                  to={'/destination/' + transformToUrlString(heading)}
                >{heading}</NavLink>
                <div className={ styles[`navigation-item__${checkCurrentUrl(heading, index, currentLocation, '/destination') ? 'active' : 'hover'}`] }></div>
              </li>
            ))}
          </ul>
        </nav>
        <h2 className={styles['destination-heading']}>{destinationToRender.heading}</h2>
        <p className={styles['main-content']}>{destinationToRender['main-content']}</p>
        <div className={styles['decorator']}></div>
        <article className={styles['additional-facts-container']}>
          <div className={styles["additional-facts"]}>
            <p className={styles["additional-facts-title"]}>avg. distance</p>
            <p className={styles["additional-facts-fact"]}>{destinationToRender.additionalFacts.averageDistance}</p>
          </div>
          <div className={styles["additional-facts"]}>
            <p className={styles["additional-facts-title"]}>est. travel time</p>
            <p className={styles["additional-facts-fact"]}>{destinationToRender.additionalFacts.travelTime}</p>
          </div>
        </article>
      </section>
    </div>
  )
}
