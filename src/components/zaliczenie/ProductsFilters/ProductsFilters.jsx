import { useContext, useState } from "react";
import { ProductsContext } from "../../../context/productsContext";
import "../commonStyles.css";

const ProductsFilters = () => {
 const { filterProducts } = useContext(ProductsContext);
 const [filter, setFilter] = useState("");

 const handleFilterChange = (e) => {
  const value = e.target.value;
  setFilter(value);
  filterProducts(value);
 };

 return (
  <div className="Wrapper">
   <input
    type="text"
    value={filter}
    onChange={handleFilterChange}
    placeholder="Filter products"
   />
  </div>
 );
};

export default ProductsFilters;
