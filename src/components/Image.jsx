import React from 'react'

const Image = ({className,imgSrc}) => {
  return (
    <div><img className={`w-100 img-fluid ${className}`} src={imgSrc} alt="This is an image."/></div>
  )
}

export default Image