import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
        <h1>Header</h1>
        <div>
            <Image 
            src='https://links.papareact.com/qd3'
            layout='fill'
            />
        </div>
        <div></div>
        <div></div>
    </header>
  )
}

export default Header