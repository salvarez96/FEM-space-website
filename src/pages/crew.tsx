import styles from '@styles/pages/crew.module.scss'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { transformToUrlString, checkCurrentUrl } from '@helpers'
import { useWindowWidth } from '@hooks/useWindowWidth'
import { useCopyToRender } from '@hooks/useCopyToRender'

export default function Crew() {

  let { crewMember } = useParams()
  const currentLocation = useLocation().pathname
  const [ crewMemberToRender, crewCopies ] = useCopyToRender('crewCopies', crewMember)
  const windowWidth = useWindowWidth()

  // handle content rendering depending on window dimensions
  let isMobileWidth = windowWidth < 768 ? true : false

  return (
    <div className={styles['crew-page-container']}>
      {isMobileWidth ?
      // mobile content
      <>
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
          <p className={styles['main-content']}>{crewMemberToRender['mainContent']}</p>
        </section>
      </>
      : // desktop content
      <>
        <section className={styles['crew-complimentary-container']}>
          <h5 className={styles['crew-subheading']}><span>02</span>MEET YOUR CREW</h5>
        </section>
        <section className={styles['crew-main-container']}>
          <h4 className={styles['crew-position']}>{crewMemberToRender.position}</h4>
          <h2 className={styles['crew-heading']}>{crewMemberToRender.name}</h2>
          <p className={styles['main-content']}>{crewMemberToRender['mainContent']}</p>
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
        </section>
        <img className={ styles['crew-image'] } src={crewMemberToRender.image} alt={crewMemberToRender.name + ' image'} />
      </> 
    }
  </div>)
}
