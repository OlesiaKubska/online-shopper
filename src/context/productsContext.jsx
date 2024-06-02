import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
 const [productsList, setProductsList] = useState([]);
 const [shoppingList, setShoppingList] = useState([]);
 const [filteredProductsList, setFilteredProductsList] = useState([]);

 const filterProducts = (filter) => {
  if (!filter) {
   setFilteredProductsList(productsList);
  } else {
   setFilteredProductsList(
    productsList.filter((product) =>
     product.name.toLowerCase().includes(filter.toLowerCase())
    )
   );
  }
 };

 return (
  <ProductsContext.Provider
   value={{
    productsList,
    setProductsList,
    shoppingList,
    setShoppingList,
    filteredProductsList,
    setFilteredProductsList,
    filterProducts,
   }}
  >
   {children}
  </ProductsContext.Provider>
 );
};

export { ProductsProvider, ProductsContext };
