import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";

export const ProductContext = createContext(false);

export function ProductsProvider({ children }) {
    

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        
        getProducts().then(data => setProducts(data))
        
    }, []);

    return (
        <ProductContext.Provider value={products}>

            {children}
        </ProductContext.Provider>
    )
}