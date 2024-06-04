import { useState } from "react";
import "./SignOut.css";

const SignOut = () => {
 const [userName, setUserName] = useState("");
 const [password, setPassword] = useState("");
 const [userAge, setUserAge] = useState();
 const [showPassword, setShowPassword] = useState(false);

 // Funkcja do przełączania widoczności hasła
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
 };

 // Funkcja do ustawiania wieku użytkownika
 const handleSetUserAge = (event) => {
  const { value } = event.target;
  if (value.length === 0 || (value > 0 && value < 99)) {
   setUserAge(value);
  }
 };

 const clearForm = () => {
  setUserName("");
  setPassword("");
  setUserAge("");
 };

 const addUserToLocalStoragesUsersList = (e) => {
  e.preventDefault();
  const user = {
   userName,
   password,
   userAge,
  };

  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  usersList.push(user);
  localStorage.setItem("usersList", JSON.stringify(usersList));
  clearForm();
  console.log(
   "userFromLocalStorage",
   JSON.parse(localStorage.getItem("usersList"))
  );
 };

 return (
  <>
   <form className="SignOut" onSubmit={addUserToLocalStoragesUsersList}>
    User form
    <input
     type="text"
     placeholder="Name"
     value={userName}
     onChange={(e) => setUserName(e.target.value)}
    />
    <input
     type={showPassword ? "text" : "password"}
     placeholder="Password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
    <button type="button" onClick={togglePasswordVisibility}>
     {showPassword ? "Hide Password" : "Show Password"}
    </button>
    <p>Age</p>
    <input
     type="number"
     placeholder="Age"
     min={0}
     max={50}
     onChange={handleSetUserAge}
     value={userAge}
    />
    <button type="submit">Add new user</button>
   </form>
  </>
 );
};

export default SignOut;
