import { Component } from "react";


class CircleGeneratorComponent extends Component{
    state={
        
        circles:[]
    }
    addCircle = () => {
        this.setState({
            circles:[...this.state.circles, true]
        },
        ()=>{})
    }
    circleClicked = (index) => {
        const update = false
        const updateCircle = this.state.circles.map((eachCir,ind)=>{
            if(index==ind){
                return update
            }else{
                return eachCir
            }
        })
        this.setState({
            circles: updateCircle
        },
            ()=>{})
    }
    render(){
        return(
            <>
                <h3>Circle Count:{this.state.circles.length}</h3>
                <button onClick={this.addCircle}>Add Circle</button>
                {
                    this.state.circles.map((eachCircle, index)=>{
                        return(
                            <div 
                                style={{width:100, 
                                height:100, 
                                border:"2px solid black", 
                                borderRadius: "50%",
                                backgroundColor: eachCircle ? "green" : "red",
                            }}
                            onClick={()=>this.circleClicked(index)}
                            ></div>
                        )
                    })
                }
            </>
        )
    }
}
export default CircleGeneratorComponent;