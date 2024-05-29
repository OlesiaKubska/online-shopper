import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../context/productsContext";
import LinearProgress from "@mui/material/LinearProgress";
import "../commonStyles.css";

const ShopingList = () => {
 const { shoppingList, fetchShoppingList, removeProductFromShoppingList } =
  useContext(ProductsContext);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  fetchShoppingList();
 }, [fetchShoppingList]);

 const handleRemoveFromShoppingList = (id) => {
  setLoading(true);
  removeProductFromShoppingList(id).then(() => setLoading(false));
 };

 return (
  <div className="App">
   <header className="AppHeader">
    <p>Shoping List</p>
    {loading && <LinearProgress />}
    <ul>
     {shoppingList.map((product, index) => (
      <li key={index} onClick={() => handleRemoveFromShoppingList(product.id)}>
       {product.name}
      </li>
     ))}
    </ul>
   </header>
  </div>
 );
};
export default ShopingList;
