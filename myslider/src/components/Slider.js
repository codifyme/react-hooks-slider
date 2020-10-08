/** @jsx jsx */
import React, { useState } from 'react'//eslint-disable-line no-unused-vars
import { css, jsx } from '@emotion/core'//eslint-disable-line no-unused-vars
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