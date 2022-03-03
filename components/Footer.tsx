import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="w-full md:h-[300px] bg-orange-600 flex flex-wrap">
        <div className="h-full px-8 py-4">
          <h1 className="font-bold text-white">Navigation</h1>
          <div className="font-light text-gray-300">Work offers</div>
          <div className="font-light text-gray-300">Employers</div>
          <div className="font-light text-gray-300">Settings</div>
          <div className="font-light text-gray-300">Account</div>
          <div className="font-light text-gray-300">Preferences</div>
        </div>
        <div className="h-full px-8 py-4">
          <h1 className="font-bold text-white">Contact</h1>
          <div className="font-light text-gray-300 underline">businessmail@gmail.com</div>
          <div className="font-light text-gray-300">788245729</div>
          <div className="font-light text-gray-300">Wrocław, XYZ, 73-583</div>
        </div>
        <div className="h-full px-8 py-4">
          <h1 className="font-bold text-white">Follow</h1>
          <div className="font-light text-gray-300">Instagram</div>
          <div className="font-light text-gray-300">Facebook</div>
          <div className="font-light text-gray-300">LinkedIn</div>
          <div className="font-light text-gray-300">Twitter</div>
        </div>
        <div className="h-full px-8 py-4">
          <h1 className="font-bold text-white">Legal</h1>
          <div className="font-light text-gray-300">Terms</div>
          <div className="font-light text-gray-300">Privacy</div>
        </div>
        <div className="h-full px-8 py-4">
          <h1 className="font-bold text-white">Help</h1>
          <div className="font-light text-gray-300">Help</div>
          <div className="font-light text-gray-300">FAQ</div>
        </div>
    </div>
  )
}

export default Footer