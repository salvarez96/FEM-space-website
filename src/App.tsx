import '@styles/global-styles.scss'
import Header from '@components/header/header'
import { Outlet, useLocation } from 'react-router-dom'
import Home from '@pages/home'

function App() {

  const getLocation = useLocation().pathname

  return (
    <>
      <Header />
      { getLocation === '/' ? <Home /> : <Outlet />}
    </>
  )
}

export default App
