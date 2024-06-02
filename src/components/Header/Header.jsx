import { useState, useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import "./Header.css";

const Header = () => {
 const { filterProducts } = useContext(ProductsContext);
 const [filter, setFilter] = useState("");

 const handleFilterChange = (e) => {
  const value = e.target.value;
  setFilter(value);
  filterProducts(value);
 };

 return (
  <div
   style={{
    height: "100px", // wysokość
    width: "100%", // szerokość 100%
    backgroundColor: "#f8d7da", // kolor tła
    display: "flex", // flexbox
    justifyContent: "center", // wyśrodkowanie w poziomie
    alignItems: "center", // wyśrodkowanie w pionie
    gap: "100px", // odstęp między elementami
   }}
  >
   Header
   <input
    type="text"
    value={filter}
    onChange={handleFilterChange}
    placeholder="Filter products"
   />
  </div>
 );
};

export default Header;
