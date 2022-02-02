import React, { useState } from "react";

/*Deliverables
The button should say "OFF" when it is first displayed
When the button is clicked, it should say "ON"
When the button is clicked again, it should say "OFF"
etc
*/

function Toggle() {

  let [ isOn, setIsOn ] = useState(false)

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }
  return (

    <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
  )
}

export default Toggle;
