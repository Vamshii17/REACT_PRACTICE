import ButtonComponent from "./Components/Button/Button.js";
import FormComponent from "./Components/Forms/Forms.js";
import ImageComponent from "./Components/Image/Image.js";
import ListComponent from "./Components/List/List.js";

function Hello(){
  return(
    <div>
      <h1>Hi, I am VamshiKrishna</h1>
      <FormComponent></FormComponent>
      <ButtonComponent></ButtonComponent>
      <ListComponent></ListComponent>
      <ImageComponent></ImageComponent>
    </div>
  )
}

export default Hello;