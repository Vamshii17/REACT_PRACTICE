import React, { Component } from "react";
import ImageComponent from "../Image/Image.js";
import ListComponent from "../List/List.js";
import HeadingComponent from "../Heading/Heading.js";
import "./ProductListing.css"; // Import the CSS file
import Spinner from 'react-bootstrap/Spinner';

//Using async and await to collect promises for async js
class ProductListingComponent extends Component {
    state = {
        recipesList: [],
        isSuccess: false
    };

    fetchProducts = async() => {
        const response = await fetch("https://dummyjson.com/recipes")
        const finalResponse = await response.json()
        const { recipes } = finalResponse
                this.setState({
                    recipesList: recipes,
                    isSuccess: true
                }, () => {
                    console.log(this.state.recipesList);
                });
    };

    render() {
        return (
            <>
                <h2>Product Listing</h2>
                <button onClick={this.fetchProducts}>Click to retrieve the product</button>
                {
                    this.state.isSuccess
                        ?
                        <div className="recipes-container">
                            {this.state.recipesList.map((eachRecipe, index) => (
                                <div key={index} className="recipe-card">
                                    <h3>{eachRecipe.name}</h3>
                                    <ImageComponent src={eachRecipe.image} />
                                    <HeadingComponent title={"Ingredients"} />
                                    <ListComponent list={eachRecipe.ingredients} />
                                    <HeadingComponent title={"Instructions"} />
                                    <ListComponent list={eachRecipe.instructions} />
                                </div>
                            ))}
                        </div>
                        :
                        <Spinner animation="border" variant="dark" />
                }
            </>
        );
    }
}

export default ProductListingComponent;
