import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignOut.css";

const SignOut = () => {
 const navigate = useNavigate();

 const initialValues = {
  username: "",
  password: "",
  email: "",
  age: "",
 };

 const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string()
   .email("Invalid email format")
   .required("Email is required"),
  age: Yup.number()
   .min(18, "You must be at least 18 years old")
   .required("Age is required"),
 });

 const handleSignOut = (values) => {
  const user = {
   username: values.username,
   password: values.password,
   email: values.email,
   age: values.age,
  };

  let availableUsers = JSON.parse(localStorage.getItem("availableUsers")) || [];
  availableUsers.push(user);
  localStorage.setItem("availableUsers", JSON.stringify(availableUsers));
  localStorage.setItem("user", JSON.stringify(user));
  navigate("/dashboard");
 };

 const handleGoToSignIn = () => {
  navigate("/signIn");
 };

 return (
  <div className="SignIn">
   <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSignOut}
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
       <Field name="password" type="password" autoComplete="new-password" />
       <ErrorMessage name="password" component="div" className="error" />
      </div>
      <div className="form-group">
       <label htmlFor="email">Email:</label>
       <Field name="email" type="email" autoComplete="email" />
       <ErrorMessage name="email" component="div" className="error" />
      </div>
      <div className="form-group">
       <label htmlFor="age">Age:</label>
       <Field name="age" type="number" autoComplete="age" />
       <ErrorMessage name="age" component="div" className="error" />
      </div>
      <div>
       <button type="submit">Register and log in</button>
      </div>
     </Form>
    )}
   </Formik>
   <button onClick={handleGoToSignIn}>Go to login</button>
  </div>
 );
};

export default SignOut;
