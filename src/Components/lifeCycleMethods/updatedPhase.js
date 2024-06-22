import React, { Component } from "react";
import axios from "axios";
import ImageComponent from "../Image/Image.js";
import ListComponent from "../List/List.js";
import HeadingComponent from "../Heading/Heading.js";
import RotatingLineSpinner from "../Spinners/RotatingLineSpinner.js";

class UpdatedPhase extends Component{
    constructor(){
        super();
        this.state={
            recipesList:[],
            eachRecipeList:{}, 
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
    componentDidUpdate (props, state){
        document.title = `React App ${this.state.count}`
        if(state.count !== this.state.count){ //if we don't give the condition then the API call runs infinite times
        //this.axiosProducts()
        this.axiosEachRecipe();
        }
    }
    axiosEachRecipe = async() => {
        const response = await axios.get(`https://dummyjson.com/recipes/${this.state.count}`)
        const {data} = response;
        this.setState({
            eachRecipeList: data
        })
        console.log(data)
    }
    updateTitle = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(props,state){
        console.log(props, state)
        return null;
    }
    static getDerivedStateFromProps(props, state){
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
                <h3>{this.state.eachRecipeList.name}</h3>
            }

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
export default UpdatedPhase;