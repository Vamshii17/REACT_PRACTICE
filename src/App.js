import React from "react"
import "./style.css"
import HeadingComponent from "./Components/Class_Component/heading_component";
import AccordionComponent from "./Components/Accordion/accordion";
import TableComponent from "./Components/Table/tableBootStrap";
import navBarComponent from "./Components/Nav_Bar/navBar";
function Hello(){
  return(
    <>
    <navBarComponent></navBarComponent>
    <br></br>
    <br></br>
    <AccordionComponent></AccordionComponent>
    <br></br>
    <br></br>
    <TableComponent></TableComponent>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <HeadingComponent></HeadingComponent>
    </>
  )
}

export default Hello;