import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10
    px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>Support</p>
            <p>Safety</p>
            <p>AirCover</p>
            <p>Report a concern</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Try hosting</p>
            <p>Our forum</p>
            <p>AirCover</p>
            <p>Responsibility</p>
            <p>Resources</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Say Hi YouTube</p>
            <p>Easter Eggs</p>
            <p>For the Win</p>
        </div>
    </div>
  )
}

export default Footer