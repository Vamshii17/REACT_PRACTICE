import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RotatingLineSpinner from "../Spinners/RotatingLineSpinner";
import ImageComponent from "../Image/Image";
import "./ProductDetails.css";
import NavBar from "../Nav_Bar/nav_Bar";

const ProductDetailsCmp = () => {
    const paramsFromURL = useParams();
    console.log("paramsFromURL", paramsFromURL);

    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        axiosEachProduct();
    }, []);

    const axiosEachProduct = async () => {
        const { status, data } = await axios.get(`https://fakestoreapi.com/products/${paramsFromURL.productId}`);
        if (status === 200) {
            setProductDetails(data);
        }
    };

    return (
        <>
            <NavBar />
            <center><h3>Product Details</h3></center>
            <div className="product-details-container">
                {
                    Object.keys(productDetails).length > 0 ? (
                        <>
                            <ImageComponent src={productDetails.image} />
                            <h3>{productDetails.title}</h3>
                            <h4>Category: {productDetails.category}</h4>
                            <p>{productDetails.description}</p>
                            <div className="price">Price: ${productDetails.price}</div>
                            <div className="rating">Rating: {productDetails.rating.rate} ({productDetails.rating.count} Reviews)</div>
                            <button>Add to cart</button>
                        </>
                    ) : (
                        <RotatingLineSpinner />
                    )
                }
            </div>
        </>
    );
};

export default ProductDetailsCmp;
