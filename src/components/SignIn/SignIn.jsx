import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignIn.css";

const SignIn = () => {
 const navigate = useNavigate();

 const initialValues = {
  username: "",
  password: "",
 };

 const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
 });

 const handleSignIn = (values) => {
  const user = {
   username: values.username,
   password: values.password,
  };

  localStorage.setItem("user", JSON.stringify(user));
  navigate("/dashboard");
 };

 return (
  <div className="SignIn">
   <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSignIn}
   >
    <Form>
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
     <button type="submit">Sign in</button>
    </Form>
   </Formik>
  </div>
 );
};

export default SignIn;
