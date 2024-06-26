import React, { Component } from "react";
import ImageComponent from "../Image/Image";
import './FilteringProducts.css';  // Import the CSS file

class FilteringProducts extends Component {
    state = {
        productList: [],
        filteredProducts: [],
    };

    fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((response) => {
                this.setState({
                    productList: response,
                    filteredProducts: response, // Initialize filteredProducts with all products
                });
            });
    };

    componentDidMount() {
        this.fetchProducts();
    }

    filterByCategory = (category) => {
        if (category === "All") {
            this.setState({
                filteredProducts: this.state.productList
            });
        } else {
            const filterProductByCategory = this.state.productList.filter(eachCategory => eachCategory.category === category);
            this.setState({
                filteredProducts: filterProductByCategory
            });
        }
    };

    render() {
        return (
            <>
                <h1>Product Listing</h1>
                <button onClick={() => this.filterByCategory("men's clothing")}>Men's Clothing</button>
                <button onClick={() => this.filterByCategory("jewelery")}>Jewelery</button>
                <button onClick={() => this.filterByCategory("electronics")}>Electronics</button>
                <button onClick={() => this.filterByCategory("women's clothing")}>Women's Clothing</button>
                <button onClick={() => this.filterByCategory("All")}>All</button>
                <div className="product-container">
                    {this.state.filteredProducts.map(eachProduct => (
                        <div className="product-item" key={eachProduct.id}>
                            <ImageComponent className="product-image" src={eachProduct.image}></ImageComponent>
                            <hr></hr>
                            <p><b>Title: </b>{eachProduct.title}</p>
                            <p><b>Price: </b>${eachProduct.price}</p>
                            <p><b>Description: </b>{eachProduct.description}</p>
                            <p><b>Category: </b>{eachProduct.category}</p>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default FilteringProducts;
