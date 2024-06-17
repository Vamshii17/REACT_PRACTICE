import React, { Component } from "react";
import ImageComponent from "../Image/Image.js";
import ListComponent from "../List/List.js";
import HeadingComponent from "../Heading/Heading.js";
import "./ProductListing.css"; // Import the CSS file
import Spinner from 'react-bootstrap/Spinner';
import SkeletonComponent from "../Skeleton_Loader/SkeletonComponet.js"; // Import the SkeletonLoader component

class ProductListingUsingSkeletonLoader extends Component {
    state = {
        recipesList: [],
        isSuccess: false,
        isLoading: false // Add loading state
    };

    fetchProducts = () => {
        this.setState({ isLoading: true }); // Set loading state to true
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((response) => {
                const { recipes } = response;
                this.setState({
                    recipesList: recipes,
                    isSuccess: true,
                    isLoading: false // Set loading state to false after fetching data
                }, () => {
                    console.log(this.state.recipesList);
                });
            });
    };

    render() {
        return (
            <>
                <h2>Product Listing</h2>
                <button onClick={this.fetchProducts}>Click to retrieve the product</button>
                {
                    this.state.isLoading // Check if loading state is true
                    ?
                    <div className="skeleton-container">
                        {[...Array(3)].map((_, index) => (
                            <SkeletonComponent key={index} />
                        ))}
                    </div>
                    :
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

export default ProductListingUsingSkeletonLoader;
