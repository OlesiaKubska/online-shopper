import "./DashboardContent.css";
import ProductsFilters from "../zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "../zaliczenie/ProductsList/ProductsList";
import ShopingList from "../zaliczenie/ShopingList/ShopingList";
import { ProductsProvider } from "../../context/productsContext";

function DashboardContent() {
 return (
  <>
   <div className="appWrapper">
    <ProductsFilters />
    <div className="columnsWrapper">
     <ProductsProvider>
      <ProductsList />
      <ShopingList />
     </ProductsProvider>
    </div>
   </div>
  </>
 );
}

export default DashboardContent;
