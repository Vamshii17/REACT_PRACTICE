import { Component } from "react";
import axios from "axios";
import ImageComponent from "../Image/Image.js";
import ListComponent from "../List/List.js";
import HeadingComponent from "../Heading/Heading.js";
import "./ProductListing.css"; // Import the CSS file
import RotatingLineSpinner from "../Spinners/RotatingLineSpinner.js";

class ProductLisitingUsingAxois extends Component{
    state={
        recipesList:[],
        isSuccess:false
    }
//Using axios and then to collect the promises for async js 
    // axiosProducts=()=>{
    //     axios.get("https://dummyjson.com/recipes")
    //     .then((response)=>{
    //         const {data} = response;
    //         const {recipes} = data;
    //         this.setState(
    //             {
    //                 recipesList: recipes,
    //                 isSuccess: true
    //             },
    //             ()=>{
    //                 console.log(this.state.recipesList)
    //             }
    //         )
    //     })
    // }

//Using async and await to collect the promises for async js
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
    render(){
        return(
            <>
            <h2>ProductListing</h2>
            <button onClick={this.axiosProducts}>Click to retrieve the products</button>
            {
                this.state.isSuccess
                ?
                <div className="recipes-container">
                    {this.state.recipesList.map((eachRecipe, index) => (
                        <div key={index} className="recipe-card">
                            <center>
                                <h3>{eachRecipe.name}</h3>
                                <ImageComponent src={eachRecipe.image} />
                            </center>  
                            <HeadingComponent title={"Ingredients"} />
                            <ListComponent list={eachRecipe.ingredients} />
                            <HeadingComponent title={"Instructions"} />
                            <ListComponent list={eachRecipe.instructions} />
                        </div>
                    ))}
                </div>
                :
                <RotatingLineSpinner></RotatingLineSpinner>
            }
            </>
        )
    }
}
export default ProductLisitingUsingAxois;