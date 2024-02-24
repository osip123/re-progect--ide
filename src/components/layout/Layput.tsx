import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Layput = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layput
