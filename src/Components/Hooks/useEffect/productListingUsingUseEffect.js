import axios from "axios";
import React, { useEffect, useState } from "react";
import RotatingLineSpinner from "../../Spinners/RotatingLineSpinner";
import ImageComponent from "../../Image/Image";
import "./ProductListing.css";

//Example for empty dependency array
const ProductListingUsingUseEffect = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosProducts();
    }, []);

    const axiosProducts = async () => {
        try {
            const { data, status } = await axios.get("https://fakestoreapi.com/products");
            console.log(data, "Data");
            if (status === 200) {
                setProducts(data);
            } else {
                alert("API is not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <center><h2>Product Listing</h2></center>
            {products.length > 0 ? (
                <div className="product-listing">
                    {products.map((eachProduct) => (
                        <div className="product-card" key={eachProduct.id}>
                            <ImageComponent src={eachProduct.image} />
                            <h3>{eachProduct.title}</h3>
                            <h4>Category: {eachProduct.category}</h4>
                            <p>{eachProduct.description}</p>
                            <div className="price">Price: ${eachProduct.price}</div>
                            <div className="rating">Rating: {eachProduct.rating.rate} ({eachProduct.rating.count}{" "} Reviews)</div>
                        </div>
                    ))}
                </div>
            ) : (
                <center><RotatingLineSpinner /></center>
            )}
        </>
    );
};

export default ProductListingUsingUseEffect;
