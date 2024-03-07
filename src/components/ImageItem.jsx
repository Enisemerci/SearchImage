import React from 'react'

export const ImageItem = ({image}) => {
  return (
    <div>
        <img className='imageListimg' src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}
