import React from 'react'

type Props = {
    value?: string
    className?:string
    onClick?:() => any
}

const Button = (props: Props) => {
  return (
    <button className={`${props.className} px-10 py-2 text-xl my-2 rounded-lg w-fit`} onClick={props.onClick}>{props.value}</button>
  )
}

export default Button