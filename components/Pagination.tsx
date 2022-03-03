import React from 'react'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
        <button className="w-[30px] h-[30px]">L</button>
        <button className="w-[30px] h-[30px]">1</button>
        <button className="w-[30px] h-[30px]">2</button>
        <button className="w-[30px] h-[30px]">3</button>
        <button className="w-[30px] h-[30px]">4</button>
        <button className="w-[30px] h-[30px]">5</button>
        <button className="w-[30px] h-[30px]">6</button>
        <button className="w-[30px] h-[30px]">R</button>
    </div>
  )
}

export default Pagination