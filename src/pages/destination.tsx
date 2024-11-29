import { destinationCopies } from '@copies'
import styles from '@styles/pages/destination.module.scss'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'

export default function Destination() {

  let { destinationName } = useParams()
  const currentLocation = useLocation().pathname
  const [ destinationToRender, setDestinationToRender ] = useState(destinationCopies[0])

  useEffect(() => {
    destinationCopies.find(destination => {
      if (destination.heading.toLowerCase() === destinationName) {
        setDestinationToRender(destination)
        return true
      }
    })
  }, [destinationName])

  function checkCurrentLocation(destination: typeof destinationToRender, index: number) {
    return currentLocation.includes(destination.heading.toLowerCase()) || (currentLocation === '/destination' && !index)
  }

  return (
    <div className={styles['destination-page-container']}>
      <section className={styles['destination-complimentary-container']}>
        <h5 className={styles['destination-subheading']}><span>01</span>PICK YOUR DESTINATION</h5>
        <img className={ styles['destination-image'] } src={destinationToRender.image} alt={destinationToRender.heading + ' image'} />
      </section>
      <section className={styles['destination-main-container']}>
        <nav className={styles['destination-navigation']}>
          <ul>
            {destinationCopies.map((destination, index) => (
              <li key={destination.heading}>
                <NavLink className={ checkCurrentLocation(destination, index) ? styles['navigation-link__active'] : '' } to={'/destination/' + destination.heading.toLowerCase()}>{destination.heading}</NavLink>
                <div className={ styles[`navigation-item__${checkCurrentLocation(destination, index) ? 'active' : 'hover'}`] }></div>
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
