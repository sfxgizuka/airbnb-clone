import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4  px-32 py-14 bg-gray-100 text-gray-600 gap-y-10'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>News Room</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Demo Site</p>
                <p>It's a pretty awesome clone</p>
                <p>Referrals Accepted</p>
                <p>Greg Best</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Grge the Maestro</p>
                <p>Presents</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Use now</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer