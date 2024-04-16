import React from 'react'

function EventFunction() {
  function clickHandler(){
    console.log("Button Functional Clicked")
  }
  return (
    <button onClick={clickHandler}>Im a function Button!</button>
  )
}

export default EventFunction