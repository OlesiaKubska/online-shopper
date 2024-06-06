import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../context/productsContext";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import "../commonStyles.css";

const ShopingList = () => {
 const { shoppingList, setShoppingList } = useContext(ProductsContext);
 const [loading, setLoading] = useState("initial");

 const fetchShoppingList = async () => {
  try {
   setLoading("loading");
   const response = await axios.get("http://localhost:4000/api/shoppingList");
   setShoppingList(response.data);
   setLoading("loaded");
  } catch (error) {
   console.error("Error fetching shopping list:", error);
   setLoading("error");
  }
 };

 const removeProductFromShoppingList = async (id) => {
  try {
   setLoading(true);
   await axios.delete(`http://localhost:4000/api/shoppingList/${id}`);
   setShoppingList((prevList) =>
    prevList.filter((product) => product.id !== id)
   );
   setLoading(false);
  } catch (error) {
   console.error("Error removing product from shopping list:", error);
   setLoading(false);
  }
 };

 useEffect(() => {
  fetchShoppingList();
 }, []);

 return (
  <div className="App">
   <header className="AppHeader">
    <p>Shoping List</p>
    {loading === "loading" ? (
     <p>
      <LinearProgress style={{ width: "100px" }} />
     </p>
    ) : (
     <ul>
      {shoppingList.map((product) => (
       <li
        key={product.id}
        onClick={() => removeProductFromShoppingList(product.id)}
       >
        {product.name}
       </li>
      ))}
     </ul>
    )}
   </header>
  </div>
 );
};
export default ShopingList;
