import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
 const [products, setProducts] = useState([]);
 const [shoppingList, setShoppingList] = useState([]);

 const fetchProducts = async () => {
  try {
   const response = await fetch("http://localhost:4000/api/productsList");
   const data = await response.json();
   setProducts(data);
  } catch (error) {
   console.error("Error fetching products:", error);
  }
 };

 const fetchShoppingList = async () => {
  try {
   const response = await fetch("http://localhost:4000/api/shoppingList");
   const data = await response.json();
   setShoppingList(data);
  } catch (error) {
   console.error("Error fetching shopping list:", error);
  }
 };

 const addProductToShoppingList = async (product) => {
  try {
   await fetch("http://localhost:4000/api/shoppingList", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
   });
   fetchShoppingList();
  } catch (error) {
   console.error("Error adding product to shopping list:", error);
  }
 };

 const removeProductFromShoppingList = async (productId) => {
  try {
   await fetch(`http://localhost:4000/api/shoppingList/${productId}`, {
    method: "DELETE",
   });
   fetchShoppingList();
  } catch (error) {
   console.error("Error removing product from shopping list:", error);
  }
 };

 return (
  <ProductsContext.Provider
   value={{
    products,
    fetchProducts,
    shoppingList,
    fetchShoppingList,
    addProductToShoppingList,
    removeProductFromShoppingList,
   }}
  >
   {children}
  </ProductsContext.Provider>
 );
};

export { ProductsProvider, ProductsContext };
