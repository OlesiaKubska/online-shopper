import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../context/productsContext";
import "../commonStyles.css";

const ProductsFilters = () => {
 const { filterProducts, categories } = useContext(ProductsContext);
 const [filter, setFilter] = useState("");
 const [categoryFilter, setCategoryFilter] = useState("");
 const [isFoodOnly, setIsFoodOnly] = useState(false);

 useEffect(() => {
  filterProducts({
   name: filter,
   category: categoryFilter,
   isFoodOnly: isFoodOnly,
  });
 }, [categoryFilter, filter, filterProducts, isFoodOnly]);

 const resetFilters = () => {
  setFilter("");
  setCategoryFilter("");
  setIsFoodOnly(false);
 };

 //  const handleFilterChange = (e) => {
 //   const value = e.target.value;
 //   setFilter(value);
 //   filterProducts(value);
 //  };

 return (
  <div className="Wrapper">
   <h3>Products Filters</h3>
   <div className="Form">
    <input
     type="text"
     placeholder="Search by name..."
     value={filter}
     onChange={(e) => setFilter(e.target.value)}
    />
    <select
     value={categoryFilter}
     onChange={(e) => setCategoryFilter(e.target.value)}
    >
     <option value="">All Categories</option>
     {categories.map((category, id) => (
      <option key={id} value={category}>
       {category}
      </option>
     ))}
    </select>
    <label>
     <input
      type="checkbox"
      checked={isFoodOnly}
      onChange={(e) => setIsFoodOnly(e.target.checked)}
     />
     Food Product
    </label>
    <button type="button" onClick={resetFilters}>
     Reset
    </button>
   </div>
  </div>
 );
};

export default ProductsFilters;
