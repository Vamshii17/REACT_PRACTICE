import { Component } from "react";

class ImageComponent extends Component{
    render(){
        return(
            <img src={this.props.src} 
            alt="" 
            width={250} 
            height={250}>
            </img>
        )
    }
}

export default ImageComponent;