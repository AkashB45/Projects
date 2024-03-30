import React from 'react'

export const Header = (props) => {
  return (
    <header><h1>{props.text}</h1></header>
  )
}
Header.defaultProps =
{
  text:"To Do List"
}
