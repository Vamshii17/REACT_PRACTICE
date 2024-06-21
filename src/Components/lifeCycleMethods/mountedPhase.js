import React, { Component } from "react";
import axios from "axios";
import ImageComponent from "../Image/Image.js";
import ListComponent from "../List/List.js";
import HeadingComponent from "../Heading/Heading.js";
import RotatingLineSpinner from "../Spinners/RotatingLineSpinner.js";

class MountedPhase extends Component{
    constructor(){
        super();
        this.state={
            recipesList:[],
            isSuccess:false,
            count:0,
            favoritecolor: "red"
        }
    }
    axiosProducts = async() => {
        try{
            const response = await axios.get("https://dummyjson.com/recipes")
            const {data, status} = response;
            const {recipes} = data;
            if(status===200){
                this.setState(
                {
                    recipesList: recipes,
                    isSuccess: true
                },
                ()=>{
                    console.log(this.state.recipesList)
                }
            )
            }else{
                alert("API is not Success")
            }
        }catch(error){
            console.log(error)
        }
    }
    componentDidMount(){
        document.title = `React App ${this.state.count}`
        this.axiosProducts();
    }
    updateTitle = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    static getDerivedStateFromProps(props){
        return{favoritecolor: props.favcol}
    }
    render(){
        return(
            <>
            <h3 style={{color:this.state.favoritecolor}}>{this.state.favoritecolor}</h3>
            <h2>Product Listing</h2>
            <h3>{this.state.count}</h3>
            <button onClick={this.updateTitle}>Click to update</button>
            {
                this.state.isSuccess
                ?
                this.state.recipesList.map(eachRecipe=>{
                    return(
                        <React.Fragment key={eachRecipe.id}>
                        <h3>{eachRecipe.name}</h3>
                        <ImageComponent src={eachRecipe.image} /> 
                        <HeadingComponent title={"Ingredients"} />
                        <ListComponent list={eachRecipe.ingredients} />
                        <HeadingComponent title={"Instructions"} />
                        <ListComponent list={eachRecipe.instructions} />
                        </React.Fragment>
                    )
                })
                :
                <RotatingLineSpinner></RotatingLineSpinner>
            }
            </>
        )
    }
}
export default MountedPhase;