import React from 'react'

type Props = {
    label?: string
    type: string
    className? : string
    name?:string
    onChange?:(e:any) => any
}

const Input = (props: Props) => {
  return (
    <div className={`${props.className} relative mt-4`}>
        <label className="text-lg absolute bottom-8 left-5 bg-white px-2">{props.label}</label>
        <input type={props.type} className="text-lg rounded-lg border-orange-600 border-4 px-2 py-1 w-full" name={props.name} onChange={props.onChange}/>
    </div>
  )
}

export default Input