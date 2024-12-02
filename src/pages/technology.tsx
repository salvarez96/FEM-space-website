import { technologyCopies } from '@copies'
import styles from '@styles/pages/technology.module.scss'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { transformToUrlString, checkCurrentUrl } from '@helpers'

export default function Technology() {

  let { terminology } = useParams()
  const currentLocation = useLocation().pathname
  const [ terminologyToRender, setTerminologyToRender ] = useState(technologyCopies[0])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    technologyCopies.find(technology => {
      if (transformToUrlString(technology.term) === terminology) {
        setTerminologyToRender(technology)
        return true
      }
    })
  }, [terminology])

  // handle content rendering depending on window dimensions
  let isDesktopWidth = windowWidth >= 1440 ? true : false

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  });

  return (
    <div className={styles['technology-page-container']}>
      <>
        <section className={styles['technology-complimentary-container']}>
          <h5 className={styles['technology-subheading']}><span>03</span>SPACE LAUNCH 101</h5>
          <img className={ styles['technology-image'] } src={terminologyToRender.images['mobile']} alt={terminologyToRender.term + ' image'} />
        </section>
        <section className={styles['technology-main-container']}>
          <nav className={styles['technology-navigation']}>
            <ul>
              {technologyCopies.map(({ term }, index) => (
                <li key={ term }>
                  <NavLink
                    className={ styles[`navigation-item${checkCurrentUrl(term, index, currentLocation, '/technology') ? '__active' : ''}`] }
                    to={'/technology/' + transformToUrlString(term)}
                    title={ term }
                  >{ index + 1 }</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <p className={styles['technology-terminology-subheading']}>THE TERMINOLOGY...</p>
          <h2 className={styles['technology-heading']}>{terminologyToRender.term}</h2>
          <p className={styles['main-content']}>{terminologyToRender['main-content']}</p>
        </section>
      </>
  </div>)
}
