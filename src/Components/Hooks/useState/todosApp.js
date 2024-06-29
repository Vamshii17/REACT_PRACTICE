import { useState } from "react"


const TodoApp=()=>{
    const[todos, setTodos]=useState(["Apple", "Banana"])
    const[newFruit]=useState("Pineapple")

    const addFruits=()=>{
        setTodos([...todos, newFruit])
    }
    const deleteFruits=(index)=>{
        const deleteItem = [...todos]
        deleteItem.splice(index,1)
        setTodos(deleteItem)
    }
    const updateFruits=(index)=>{
        const newFruits="Mango"
        const updateItem = todos.map((eachFruit, ind)=>{
            if(index===ind){
                return newFruits
            }else{
                return eachFruit
            }
        })
        setTodos(updateItem)
    }
    return(
        <>
        <button onClick={addFruits}>Add fruits</button>
        <ol>
            {
                todos.map((eachFruit, index)=>{
                    return(
                        <>
                        <li>{eachFruit}</li>
                        <button onClick={()=>updateFruits(index)}>Update</button>
                        <button onClick={deleteFruits}>Delete</button>
                        </>
                    )
                })
            }
        </ol>
        </>
    )
}
export default TodoApp;