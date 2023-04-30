import React from 'react'

const Overlay = (props) => {
  return (
    <div className={props.show?`bg-black opacity-70 h-full w-full fixed z-10`:`bg-black opacity-70 h-full w-full hidden z-10`} 
    onClick={() => props.clear()}
    ></div>
  )
}

export default Overlay