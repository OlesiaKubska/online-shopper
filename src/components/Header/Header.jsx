import { useNavigate, NavLink } from "react-router-dom";
import Paragraph from "../Paragraph/Paragraph";
import "./Header.css";

const Header = () => {
 const navigate = useNavigate();
 const user = JSON.parse(localStorage.getItem("user"));
 const userName = user?.username;

 const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/signIn");
 };

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
   {userName ? (
    <>
     <Paragraph paragraphText={`Hi, ${userName}`} />
     <button onClick={handleLogout}>Log out</button>
    </>
   ) : (
    <NavLink to="/signIn">Sign In</NavLink>
   )}
  </div>
 );
};

export default Header;
