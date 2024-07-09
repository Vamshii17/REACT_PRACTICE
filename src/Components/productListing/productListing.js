import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import ImageComponent from "../Image/Image";
import RotatingLineSpinner from "../Spinners/RotatingLineSpinner";
import { Link } from "react-router-dom";

const ProductListingCmp = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(["All"]);
    const [filterValue, setFilterValue] = useState("All");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axiosCategories();
        axiosProducts();
    }, []);

    const axiosProducts = async () => {
        try {
            const { data, status } = await axios.get("https://fakestoreapi.com/products");
            console.log(data, "Data");
            if (status === 200) {
                setProducts(data);
                setLoading(false);
            } else {
                alert("API is not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (event) => {
        setLoading(true);
        const optionSelected = event.target.value;
        console.log(optionSelected, "handleChange");
        setFilterValue(optionSelected);
        axiosFilteredProducts(optionSelected);
    };

    const axiosFilteredProducts = async (optionSelected) => {
        if (optionSelected === "All") {
            axiosProducts();
        } else {
            const { data, status } = await axios.get(`https://fakestoreapi.com/products/category/${optionSelected}`);
            if (status === 200) {
                setProducts(data);
                setLoading(false);
            }
        }
    };

    const axiosCategories = async () => {
        const { data, status } = await axios.get("https://fakestoreapi.com/products/categories");
        if (status === 200) {
            setCategories([...categories, ...data]);
        }
    };

    return (
        <>
            <center><h2>Product Listing</h2></center>
            <select onChange={handleChange} value={filterValue}> 
                {categories.map((eachCategory, index) => (
                    <option value={eachCategory} key={index}>{eachCategory}</option>
                ))}
            </select>
            {products.length > 0 && !loading ? (
                <div className="product-listing">
                    {products.map((eachProduct) => (
                        <div className="product-card" key={eachProduct.id}>
                            <ImageComponent src={eachProduct.image} />
                            <h3>{eachProduct.title}</h3>
                            <h4>Category: {eachProduct.category}</h4>
                            <p>{eachProduct.description}</p>
                            <div className="price">Price: ${eachProduct.price}</div>
                            <div className="rating">Rating: {eachProduct.rating.rate} ({eachProduct.rating.count} Reviews)</div>
                            <button><Link to={`${eachProduct.category}/${eachProduct.id}`}>Click to see Product</Link></button>
                        </div>
                    ))}
                </div>
            ) : (
                <center><RotatingLineSpinner /></center>
            )}
        </>
    );
};

export default ProductListingCmp;
