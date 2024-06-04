import { NavLink } from "react-router-dom";
import Paragraph from "../Paragraph/Paragraph";
import "./Header.css";

const Header = () => {
 const userName = JSON.parse(localStorage.getItem("user"))?.username;
 return (
  <div
   style={{
    height: "100px",
    width: "100%",
    backgroundColor: "#f8d7da",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
   }}
  >
   <Paragraph paragraphText={`Hi, ${userName}`} />
   <NavLink to="/signIn">Log out</NavLink>
  </div>
 );
};

export default Header;
