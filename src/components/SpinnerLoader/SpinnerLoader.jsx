import React from 'react';
import './SpinnerLoader.scss';
import { Audio } from  'react-loader-spinner'



const SpinnerLoader = () => {
  return (
    <div className='loader__screen'>
<Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
    </div>
  )
}

export default SpinnerLoader