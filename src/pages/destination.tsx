import { destinationCopies } from '@copies'
import styles from '@styles/pages/destination.module.scss'

export default function Destination() {
  return (
    <>
      <h5 className={styles['destination-subheading']}><span>01</span>PICK YOUR DESTINATION</h5>
      <img className={ styles['destination-image'] } src={destinationCopies[0].image} alt={destinationCopies[0].heading + ' image'} />
      <nav className={styles['destination-navigation']}>
        <ul>
          {destinationCopies.map(destination => (
                <li key={destination.heading}>{destination.heading}</li>
          ))}
        </ul>
      </nav>
      <section className={styles['destination-main-container']}>
        <h2 className={styles['destination-heading']}>{destinationCopies[0].heading}</h2>
        <p className={styles['main-content']}>{destinationCopies[0]['main-content']}</p>
        <div className={styles['decorator']}></div>
        <article className={styles['additional-facts-container']}>
          <div className={styles["additional-facts"]}>
            <p className={styles["additional-facts-title"]}>avg. distance</p>
            <p className={styles["additional-facts-fact"]}>{destinationCopies[0].additionalFacts.averageDistance}</p>
          </div>
          <div className={styles["additional-facts"]}>
            <p className={styles["additional-facts-title"]}>est. travel time</p>
            <p className={styles["additional-facts-fact"]}>{destinationCopies[0].additionalFacts.travelTime}</p>
          </div>
        </article>
      </section>
    </>
  )
}
