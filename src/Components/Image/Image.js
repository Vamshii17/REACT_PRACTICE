import { Component } from "react";

class ImageComponent extends Component{
    render(){
        return(
            <img src={this.props.src} 
            alt="" 
            width={200} 
            height={200}>
            </img>
        )
    }
}

export default ImageComponent;