import { Component } from "react";
import GreetingComponent from "../Greeting/greeting.js"
import TodoComponent from "../Todo/todo.js";


class YoutubeButtonComponent extends Component{
    state={
        subscribeText:"Please Subscribe",
        subscribedText:"Thanks for subscribing",
        isSubscribe:false,
    };
    changeText=()=>{
        console.log("hello")
        this.setState(
            {
                isSubscribe: !this.state.isSubscribe,
            },
            ()=>{})
    }
    render(){
        return(
            <>
                <button onClick={this.changeText}>{this.state.isSubscribe 
                    ? this.state.subscribedText 
                    : this.state.subscribeText}
                </button>

                {
                    this.state.isSubscribe && <GreetingComponent>Vamshi</GreetingComponent>
                }
            </>
        )
    }
}

export default YoutubeButtonComponent;