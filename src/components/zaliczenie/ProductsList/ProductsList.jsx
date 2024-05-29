import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../../context/productsContext";
import LinearProgress from "@mui/material/LinearProgress";
import "../commonStyles.css";

const ProductsList = () => {
 const { products, fetchProducts, addProductToShoppingList } =
  useContext(ProductsContext);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  fetchProducts();
 }, [fetchProducts]);

 const handleLoadProducts = async () => {
  setLoading(true);
  await fetchProducts();
  setLoading(false);
 };

 const handleAddToShoppingList = (product) => {
  setLoading(true);
  addProductToShoppingList(product).then(() => setLoading(false));
 };

 return (
  <div className="App">
   <header className="AppHeader">
    <p>Products list</p>
    <button onClick={handleLoadProducts}>Load</button>
    {loading && <LinearProgress />}
    <ul>
     {products.map((product, index) => (
      <li key={index} onClick={() => handleAddToShoppingList(product)}>
       {product.name}
      </li>
     ))}
    </ul>
   </header>
  </div>
 );
};

export default ProductsList;
