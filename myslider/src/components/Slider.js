/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'

/**
 * @function Slider
 */
const Slider = () => {
  return (
    <div style={{height:'100%', width:'100%',background:'#333'}}>
        <SliderContent/>
    </div>
  )
}
export default Slider