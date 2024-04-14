import React, { createContext, useState } from 'react'

export const Context = createContext()

export default function GlobalContext(props) {
  // FUNCITONS


  // VARIABLES

  const [isActive, setisActive] = useState('Pizza')

  // CODE

  const contextObject = { isActive, setisActive }

  // RETURN
  return (
    <Context.Provider value={contextObject}>
      {props.children}
    </Context.Provider>
  )
}
