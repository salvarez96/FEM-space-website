import styles from '@styles/pages/technology.module.scss'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { transformToUrlString, checkCurrentUrl } from '@helpers'
import { useWindowWidth } from 'src/hooks/useWindowWidth'
import { useCopyToRender } from '@hooks/useCopyToRender'

export default function Technology() {

  let { terminology } = useParams()
  const currentLocation = useLocation().pathname
  const [ technologyToRender, technologyCopies ] = useCopyToRender('technologyCopies', terminology)
  const windowWidth = useWindowWidth()

  // handle content rendering depending on window dimensions
  const isDesktopWidth = windowWidth >= 1440 ? true : false

  return (
    <main className={styles['technology-page-container']}>
      <h5 className={styles['technology-subheading']}><span>03</span>SPACE LAUNCH 101</h5>
      <img className={ styles['technology-image'] } src={technologyToRender.images && technologyToRender.images[isDesktopWidth ? 'desktop' : 'mobile']} alt={technologyToRender.name + ' image'} />
      <section className={styles['technology-main-container']}>
        <nav className={styles['technology-navigation']}>
          <ul>
            {technologyCopies.map(({ name }, index) => (
              <li key={ name }>
                <NavLink
                  className={ styles[`navigation-item${checkCurrentUrl(name, index, currentLocation, '/technology') ? '__active' : ''}`] }
                  to={'/technology/' + transformToUrlString(name)}
                  title={ name }
                >{ index + 1 }</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <article className={styles['technology-content-container']}>
          <p className={styles['technology-terminology-subheading']}>THE TERMINOLOGY...</p>
          <h2 className={styles['technology-heading']}>{technologyToRender.name}</h2>
          <p className={styles['main-content']}>{technologyToRender['mainContent']}</p>
        </article>
      </section>
    </main>
  )
}
