import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        {/* <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' /> */}
        <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNzZW50aWFsJTIwb2lsfGVufDB8fDB8fHww" alt="headphones" className='hero-banner-image' />


        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">BUTTON</button>
          </Link>

          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner