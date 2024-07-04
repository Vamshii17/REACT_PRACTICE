import axios from "axios";
import { useEffect, useState } from "react";
import ImageComponent from "../../Image/Image";
import "./ProductDetails.css";

const UseEffectUsingVariables = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [products, setProducts] = useState({});

    useEffect(() => {
        console.log("UseEffect....");
        document.title = `React Count is ${count1}`;
        axiosProducts();
    }, [count1]);

    const axiosProducts = async () => {
        try {
            const { data, status } = await axios.get(`https://fakestoreapi.com/products/${count1}`);
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
            <div className="product-details" key={products.id}>
                <ImageComponent src={products.image} />
                <h3>{products.title}</h3>
                <h4>Category: {products.category}</h4>
                <p>{products.description}</p>
                <div className="price">Price: ${products.price}</div>
                {products.rating && (
                    <div className="rating">Rating: {products.rating.rate} ({products.rating.count} Reviews)</div>
                )}
            </div>
            <h3>Count-1 value is {count1}</h3>
            <button onClick={() => setCount1(count1 + 1)}>Increase Count-1</button>
            <h3>Count-2 value is {count2}</h3>
            <button onClick={() => setCount2(count2 + 1)}>Increase Count-2</button>
        </>
    );
};

export default UseEffectUsingVariables;
