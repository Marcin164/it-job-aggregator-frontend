import React from 'react'

type Props = {
    children:any
}

const NavButton = (props: Props) => {
  return (
    <div className="w-full p-2 text-gray-600">{props.children}</div>
  )
}

export default NavButton