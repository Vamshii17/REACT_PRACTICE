import React from "react"
import "./style.css"
import ButtonComponent from "./Components/Button/Button"
import GreetingComponent from "./Components/Greeting/greeting"
import { propTypes } from "react-bootstrap/esm/Image"

function Hello(){
  const signIn="Sign In"
  const signUp="Sign Up"
  const logIn="Log In"
  const logUp="Log Up"
  return(
    <>
      <GreetingComponent>Vamshi</GreetingComponent>
      <GreetingComponent>
        <h3>Krishna</h3>
        <h3>How are you?</h3>
      </GreetingComponent>
      <br></br>
      <br></br>
      <ButtonComponent text={signIn} textColor={"white"}></ButtonComponent>
      <br></br>
      <ButtonComponent text={signUp} textColor={"blue"}></ButtonComponent>
      <br></br>
      <ButtonComponent text={logIn} textColor={"orange"}></ButtonComponent>
      <br></br>
      <ButtonComponent text={logUp}></ButtonComponent>
    </>
  )
}

export default Hello;

