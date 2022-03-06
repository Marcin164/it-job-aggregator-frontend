import React from 'react'

type Props = {
    value:string
}

const Skill = (props: Props) => {
  return (
    <div className="bg-orange-600/50 border-2 border-orange-600 text-orange-600 font-bold text-lg rounded-lg px-3 mr-1 mt-1">{props.value}</div>
  )
}

export default Skill