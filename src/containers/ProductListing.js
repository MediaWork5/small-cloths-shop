import React, { useEffect } from 'react'
import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/action/productActions'
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    // const products = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => {
                console.log("Error fetching product", error);
            });

        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    },[])

    // console.log("product", products);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;