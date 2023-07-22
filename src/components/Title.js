import React from 'react'
import { Markup } from 'interweave';

const Title = ({title}) => {
  return (
    <>
    <Markup content={title} />
    </>
  )
}

export default Title