import React from 'react'

type Props = {
    value?: string
    className?:string
}

const Button = (props: Props) => {
  return (
    <button className={`${props.className} px-10 py-2 text-xl my-2 rounded w-fit`}>{props.value}</button>
  )
}

export default Button