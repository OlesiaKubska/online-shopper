import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
 const navigate = useNavigate();
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const handleSignIn = (event) => {
  event.preventDefault();
  const user = {
   username: username,
   password: password,
  };
  // Here you can add authentication logic
  console.log("user", user);
  localStorage.setItem("user", JSON.stringify(user));
  navigate("/dashboard");
 };

 return (
  <form className="SignIn" onSubmit={handleSignIn}>
   <label>
    Username:
    <input
     type="text"
     value={username}
     onChange={(e) => setUsername(e.target.value)}
    />
   </label>
   <label>
    Password:
    <input
     type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
   </label>
   <button type="submit">Sign in</button>
  </form>
 );
};

export default SignIn;
