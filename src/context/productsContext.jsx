import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
 const [products, setProducts] = useState([]);

 const fetchProducts = async () => {
  try {
   const response = await fetch("http://localhost:4000/api/productsList");
   const data = await response.json();
   setProducts(data);
  } catch (error) {
   console.error("Error fetching products:", error);
  }
 };

 return (
  <ProductsContext.Provider value={{ products, fetchProducts }}>
   {children}
  </ProductsContext.Provider>
 );
};

export { ProductsProvider, ProductsContext };
