import React from 'react'

type Props = {
    value:string
}

const Info = (props: Props) => {
  return (
    <div className="font-light my-1">{props.value}</div>
  )
}

export default Info