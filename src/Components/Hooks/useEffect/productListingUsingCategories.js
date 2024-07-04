import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductListingUsingCategories.css"; // Assuming you have a CSS file for styling

const ProductListingUsingCategories = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        axiosCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            axiosProducts(selectedCategory);
        }
    }, [selectedCategory]);

    const axiosCategories = async () => {
        try {
            const { data, status } = await axios.get("https://fakestoreapi.com/products/categories");
            console.log(data, "data");
            if (status === 200) {
                setCategories(data);
            } else {
                alert("API is not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const axiosProducts = async (category) => {
        try {
            const { data, status } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            console.log(data, "data");
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
            <h3>Product Listing</h3>
            <div className="button-container">
                {categories.map((eachCategory) => (
                    <button key={eachCategory} onClick={() => setSelectedCategory(eachCategory)}>
                        {eachCategory}
                    </button>
                ))}
            </div>
            <div className="product-container">
                {products.map((eachProduct) => (
                    <div key={eachProduct.id} className="product-card">
                        <img src={eachProduct.image} alt={eachProduct.title} />
                        <h3>{eachProduct.title}</h3>
                        <p>{eachProduct.description}</p>
                        <p>Category: {eachProduct.category}</p>
                        <div className="price">Price: ${eachProduct.price}</div>
                        {eachProduct.rating && (
                            <div className="rating">
                                Rating: {eachProduct.rating.rate} ({eachProduct.rating.count} reviews)
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductListingUsingCategories;
