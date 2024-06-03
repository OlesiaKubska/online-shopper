import { createContext, useCallback, useEffect, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
 const [productsList, setProductsList] = useState([]);
 const [shoppingList, setShoppingList] = useState([]);
 const [filteredProductsList, setFilteredProductsList] = useState([]);
 const [categories, setCategories] = useState([]);

 useEffect(() => {
  const uniqueCategories = [
   ...new Set(productsList.map((product) => product.category)),
  ];
  setCategories(uniqueCategories);
 }, [productsList]);

 const filterProducts = useCallback(
  (filters) => {
   let filteredList = productsList;

   if (filters.name) {
    filteredList = filteredList.filter((product) =>
     product.name.toLowerCase().includes(filters.name.toLowerCase())
    );
   }

   if (filters.category) {
    filteredList = filteredList.filter(
     (product) => product.category === filters.category
    );
   }

   if (filters.isFoodOnly) {
    filteredList = filteredList.filter((product) => product.isFood);
   }

   setFilteredProductsList(filteredList);
  },
  [productsList]
 );

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
    categories,
   }}
  >
   {children}
  </ProductsContext.Provider>
 );
};

export { ProductsProvider, ProductsContext };
