import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignIn.css";

const SignIn = () => {
 const navigate = useNavigate();
 const [error, setError] = useState("");
 const [showPassword, setShowPassword] = useState(false);

 const initialValues = {
  username: "",
  password: "",
 };

 const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
 });

 const handleSignIn = (values) => {
  const { username, password } = values;
  const availableUsers =
   JSON.parse(localStorage.getItem("availableUsers")) || [];
  const user = availableUsers.find(
   (u) => u.username === username && u.password === password
  );

  if (user) {
   localStorage.setItem("user", JSON.stringify(user));
   navigate("/dashboard");
  } else {
   setError("Invalid username or password.");
  }
 };

 const handleGoToSignOut = () => {
  navigate("/signOut");
 };

 return (
  <div className="SignIn">
   <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSignIn}
   >
    {({ handleSubmit }) => (
     <Form onSubmit={handleSubmit}>
      <div className="form-group">
       <label htmlFor="username">Username:</label>
       <Field name="username" type="text" autoComplete="username" />
       <ErrorMessage name="username" component="div" className="error" />
      </div>
      <div className="form-group">
       <label htmlFor="password">Password:</label>
       <div className="password-wrapper">
        <Field
         name="password"
         type={showPassword ? "text" : "password"}
         autoComplete="current-password"
         className="password-input"
        />
        <button
         type="button"
         className="toggle-password"
         onClick={() => setShowPassword(!showPassword)}
        >
         {showPassword ? (
          <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 576 512"
           width="20"
           height="20"
           fill="#007bff"
          >
           <path d="M572.52 241.4C518.31 135.6 410.61 64 288 64 165.39 64 57.69 135.6 3.48 241.4a48.025 48.025 0 000 29.2C57.69 376.4 165.39 448 288 448c122.61 0 230.31-71.6 284.52-177.4a48.025 48.025 0 000-29.2zM288 400c-61.86 0-112-50.14-112-112s50.14-112 112-112 112 50.14 112 112-50.14 112-112 112zm0-176c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64z" />
          </svg>
         ) : (
          <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 640 512"
           width="20"
           height="20"
           fill="#007bff"
          >
           <path d="M320 400c-79.5 0-144-64.5-144-144S240.5 112 320 112s144 64.5 144 144-64.5 144-144 144zm0-256c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112S381.9 144 320 144zm313.2 78.8C551.5 89.8 428.1 0 320 0S88.5 89.8 6.8 222.8c-8.1 13.7-8.1 30.7 0 44.4C88.5 422.2 211.9 512 320 512s231.5-89.8 313.2-222.8c8.1-13.7 8.1-30.7 0-44.4zM320 464c-79.4 0-152.8-40.2-232.7-118.6C47.9 279.3 23.5 243.4 8.6 216.6c-1.7-2.9-1.7-6.4 0-9.3C23.5 176.6 47.9 140.7 87.3 118.6 167.2 40.2 240.6 0 320 0s152.8 40.2 232.7 118.6C568.1 140.7 592.5 176.6 607.4 203.4c1.7 2.9 1.7 6.4 0 9.3-14.9 26.8-39.3 62.7-79.3 84.8C472.8 423.8 399.4 464 320 464z" />
          </svg>
         )}
        </button>
       </div>
       <ErrorMessage name="password" component="div" className="error" />
      </div>
      {error && <p className="error">{error}</p>}
      <div>
       <button type="submit">Sign in</button>
      </div>
     </Form>
    )}
   </Formik>
   <button onClick={handleGoToSignOut}>Go to registration</button>
  </div>
 );
};

export default SignIn;
