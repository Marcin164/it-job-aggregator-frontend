import React from 'react'

type Props = {
    value: string
}

const Button = (props: Props) => {
  return (
    <button className="bg-orange-600 px-10 py-2 text-xl text-white rounded">{props.value}</button>
  )
}

export default Button