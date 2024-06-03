import React from "react"
import "./style.css"
import HeadingComponent from "./Components/Class_Component/heading_component";
import AccordionComponent from "./Components/Accordion/accordion";
import TableComponent from "./Components/Table/tableBootStrap";
import NavBarComponent from "./Components/Nav_Bar/navBar";
import CarouselComponent from "./Components/Carousels/Carousels";
import ProgressBarComponent from "./Components/Progress_Bars/ProgressBars";
import SpinnerComponent from "./Components/Spinners/SpinnersComponent";
import ToastComponent from "./Components/Toasts/Toasts_Component";
import ModalComponent from "./Components/Modals/Modals_Component";
function Hello(){
  return(
    <>
    <NavBarComponent></NavBarComponent>
    <br></br>
    <br></br>
    <CarouselComponent></CarouselComponent>
    <br></br>
    <br></br>
    <AccordionComponent></AccordionComponent>
    <br></br>
    <br></br>
    <TableComponent></TableComponent>
    <br></br>
    <br></br>
    <ProgressBarComponent></ProgressBarComponent>
    <br></br>
    <br></br>
    <SpinnerComponent></SpinnerComponent>
    <br></br>
    <br></br>
    <ToastComponent></ToastComponent>
    <br></br>
    <br></br>
    <ModalComponent></ModalComponent>
    <br></br>
    <br></br>
    <HeadingComponent></HeadingComponent>
    </>
  )
}

export default Hello;