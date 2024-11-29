import { crewCopies } from '@copies'
import styles from '@styles/pages/crew.module.scss'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { transformToUrlString, checkCurrentUrl } from '@helpers'

export default function Crew() {

  let { crewMember } = useParams()
  const currentLocation = useLocation().pathname
  const [ crewMemberToRender, setCrewMemberToRender ] = useState(crewCopies[0])

  useEffect(() => {
    crewCopies.find(member => {
      if (transformToUrlString(member.name) === crewMember) {
        setCrewMemberToRender(member)
        return true
      }
    })
  }, [crewMember])

  return (
    <div className={styles['crew-page-container']}>
      <section className={styles['crew-complimentary-container']}>
        <h5 className={styles['crew-subheading']}><span>02</span>MEET YOUR CREW</h5>
        <img className={ styles['crew-image'] } src={crewMemberToRender.image} alt={crewMemberToRender.name + ' image'} />
        <div className={styles['decorator']}></div>
      </section>
      <section className={styles['crew-main-container']}>
        <nav className={styles['crew-navigation']}>
          <ul>
            {crewCopies.map(({ name }, index) => (
              <li key={ name }>
                <NavLink
                  className={ styles[`navigation-item${checkCurrentUrl(name, index, currentLocation, '/crew') ? '__active' : ''}`] }
                  to={'/crew/' + transformToUrlString(name)}
                  title={ name }
                ></NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <h4 className={styles['crew-position']}>{crewMemberToRender.position}</h4>
        <h2 className={styles['crew-heading']}>{crewMemberToRender.name}</h2>
        <p className={styles['main-content']}>{crewMemberToRender['main-content']}</p>
      </section>
    </div>
  )
}
