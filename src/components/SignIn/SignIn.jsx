import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignIn.css";

const SignIn = () => {
 const navigate = useNavigate();
 const [error, setError] = useState("");

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
       <Field name="password" type="password" autoComplete="current-password" />
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
