import Image from 'next/image'
import React from 'react'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
        <button className="w-[30px] h-[30px]"><Image src="/angle-small-left.svg" alt="left" width="30" height="30"/></button>
        <button className="w-[30px] h-[30px] text-xl">1</button>
        <button className="w-[30px] h-[30px] text-xl">2</button>
        <button className="w-[30px] h-[30px] text-xl">3</button>
        <button className="w-[30px] h-[30px] text-xl">4</button>
        <button className="w-[30px] h-[30px] text-xl">5</button>
        <button className="w-[30px] h-[30px] text-xl">6</button>
        <button className="w-[30px] h-[30px]"><Image src="/angle-small-right.svg" alt="right" width="30" height="30"/></button>
    </div>
  )
}

export default Pagination