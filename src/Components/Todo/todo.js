import { Component } from "react";


class TodoComponent extends Component{
    state={
        todos: ["eat apple", "eat banana"],
        newFruit: "eat pineapple"
    }
    addNewFruit=()=>{
        this.setState({
            todos: [...this.state.todos,this.state.newFruit]
        },
            ()=>{})
    }
    deleteFruit=(index)=>{
        const newList = this.state.todos.filter((each, i) => {
            return index !== i
        })
        this.setState({
            todos: newList
        })
    }
    updateFruit=(index)=>{
        const random = "eat mango"
        const updatedTodos = this.state.todos.map((eachFruit, ind)=>{
            if(index==ind){
                return random
            }else{
                return eachFruit
            }
        })
        this.setState({
            todos: updatedTodos
        },
            ()=>{})
    }
    render(){
        return(
            <>
            <button onClick={this.addNewFruit}>Click to add new fruit</button>
            <ol>
                {
                    this.state.todos.map((eachTodo, index)=>{
                        return(
                            <>
                                <li>{eachTodo}</li>
                                <button onClick={()=>this.deleteFruit(index)}>Delete</button>
                                <button onClick={()=>this.updateFruit(index)}>Update</button>
                            </>
                        )
                    })
                }
            </ol>
            </>
        )
    }
}

export default TodoComponent;