import React, {createElement, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";


interface Product {
    id: string,
    name: string,
    description: string
}

const ShowProduct = ({product}: {product: Product}) => {
    return <div>
        <h1>{product.id}</h1>
        <p>{product.description}</p>
    </div>
}

class ProductClient {
    static fetchProductById = async (id: string) => {
        const response = await axios.get(`http://localhost:3001/products/1`)
        return response.data
    }
}

function App() {

    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        (async () => {
            const responseProduct = await ProductClient.fetchProductById('1')
            setProduct(responseProduct)
        })()
    }, [])

  return (
    <div>
        {!product && <h1>LOADING</h1>}
        {product && <ShowProduct product={product}/>}
    </div>
  );
}

export default App;
