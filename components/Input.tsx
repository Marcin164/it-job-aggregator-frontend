import React from 'react'

type Props = {
    label?: string
    type: string
    className? : string
}

const Input = (props: Props) => {
  return (
    <div className={`${props.className} relative mt-4`}>
        <label className="text-lg absolute bottom-8 left-5 bg-white px-2">{props.label}</label>
        <input type={props.type} className="text-lg rounded border-orange-600 border-4 px-2 py-1 w-full"/>
    </div>
  )
}

export default Input