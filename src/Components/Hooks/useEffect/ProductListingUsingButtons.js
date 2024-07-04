import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductListingUsingButtons.css";

const ProductListingUsingButtons = () => {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState({});
    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        axiosDetails();
    }, []);

    useEffect(() => {
        axiosProducts();
    }, [count]);

    const axiosDetails = async () => {
        try {
            const { data, status } = await axios.get("https://fakestoreapi.com/products");
            console.log(data, "Data");
            if (status === 200) {
                setProductArr(data);
            } else {
                alert("API is not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const axiosProducts = async () => {
        try {
            const { data, status } = await axios.get(`https://fakestoreapi.com/products/${count}`);
            console.log(data, "Data");
            if (status === 200) {
                setProduct(data);
            } else {
                alert("API is not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="button-container">
                {productArr.map((eachProduct, index) => (
                    <button key={index} onClick={() => setCount(index + 1)}>{index + 1}</button>
                ))}
            </div>

            {product.title && (
                <div className="product-details">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <div className="price">Price: ${product.price}</div>
                    {product.rating && (
                        <div className="rating">
                            Rating: {product.rating.rate} ({product.rating.count} reviews)
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default ProductListingUsingButtons;
