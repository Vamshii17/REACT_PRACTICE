import ButtonComponent from "./Components/Button/Button.js";
import FormComponent from "./Components/Forms/Forms.js";
import ImageComponent from "./Components/Image/Image.js";


function Hello(){
  return(
    <div>
      <h1>Hi, I am VamshiKrishna</h1>
      <FormComponent></FormComponent>
      <ButtonComponent></ButtonComponent>
      <br></br>
      <ImageComponent></ImageComponent>
    </div>
  )
}

export default Hello;