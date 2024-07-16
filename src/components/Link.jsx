import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({text}) => {
  return (
    <div>
      <NavLink to={text} />
    </div>
  )
}

export default Link
