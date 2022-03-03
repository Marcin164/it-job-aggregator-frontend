import type { AppProps } from 'next/app'
import React, {FC} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

type Props = {

}

const DashboardLayout: FC<Props> = ({children}) => {
  return (
    <div>
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}

export default DashboardLayout