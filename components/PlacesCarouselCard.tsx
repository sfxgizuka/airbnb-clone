import Image from 'next/image'
import React from 'react'

const PlacesCarouselCard = (props:any) => {
    const { img, title } = props
  return (
    <div>
        <div>
            <Image 
            src={img}
            layout='fill'
            alt='hotels'
            />
        </div>
    </div>
  )
}

export default PlacesCarouselCard