import { useContext, useState } from "react";
import { ProductsContext } from "../../../context/productsContext";
import { LinearProgress } from "@mui/material";
import axios from "axios";
import "../commonStyles.css";

const ProductsList = () => {
 const {
  filteredProductsList,
  setProductsList,
  setFilteredProductsList,
  setShoppingList,
 } = useContext(ProductsContext);
 const [loading, setLoading] = useState("initial");

 const loadProductsListFromApi = async () => {
  try {
   setProductsList([]);
   setFilteredProductsList([]);
   setLoading("loading");

   const productsFromApi = await axios.get(
    "http://localhost:4000/api/productsList"
   );
   //    console.log("API response:", productsFromApi);
   setLoading("loaded");
   setProductsList(productsFromApi.data);
   setFilteredProductsList(productsFromApi.data);
  } catch (error) {
   setLoading("error");
   console.error("Error fetching products");
  }
 };

 const addProductToShoppingList = async (product) => {
  try {
   await axios.post("http://localhost:4000/api/shoppingList", product);
   const response = await axios.get("http://localhost:4000/api/shoppingList");
   setShoppingList(response.data);
  } catch (error) {
   console.error("Error adding product to shopping list:", error);
  }
 };

 return (
  <div className="App">
   <header className="AppHeader">
    <p>Products list</p>
    <button onClick={loadProductsListFromApi}>Load</button>
    {loading === "loading" ? (
     <p>
      <LinearProgress style={{ width: "100px" }} />
     </p>
    ) : (
     <ul>
      {filteredProductsList &&
       filteredProductsList.map((product) => (
        <li key={product.id} onClick={() => addProductToShoppingList(product)}>
         {product.name}
        </li>
       ))}
     </ul>
    )}
   </header>
  </div>
 );
};

export default ProductsList;
