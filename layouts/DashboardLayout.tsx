import type { AppProps } from 'next/app'
import React, {FC} from 'react'
import Navbar from '../components/Navbar'

type Props = {

}

const DashboardLayout: FC<Props> = ({children}) => {
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  )
}

export default DashboardLayout