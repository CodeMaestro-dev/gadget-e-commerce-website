import formImage from "/assets/images/form-image.png";
import google from "/assets/icons/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux-features/authSlice";
import { useEffect, useState } from "react";

const Signup = () => {
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth.status);

  const errorState = useSelector((state) => state.auth.error);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      email: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setSuccess("");
      dispatch(signup({ email: values.email, password: values.password }));
    },
  });

  useEffect(() => {
    if (authState === "succeeded") {
      setSuccess("User Authorized. Redirecting to Login Page ...");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [authState, navigate]);

  return (
    <div className="main-form">
      <div className="main-form__image">
        <img src={formImage} role="presentation" />
      </div>
      <div className="main-form__form">
        <form onSubmit={formik.handleSubmit}>
          <div className="main-form__form--headers">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            {success == "" ? null : <p className="success">{success}</p>}
          </div>
          <div className="main-form__form--input">
            <input
              id="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="errors">{formik.errors.name}</div>
            ) : null}
            {authState === "failed" ? (
              <div className="errors">{errorState.slice(22, -2)}</div>
            ) : null}
            <input
              id="email"
              type="text"
              placeholder="Email or Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="errors">{formik.errors.email}</div>
            ) : null}
            {authState === "failed" ? (
              <div className="errors">{errorState.slice(22, -2)}</div>
            ) : null}
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="errors">{formik.errors.password}</div>
            ) : null}
            {authState === "failed" ? (
              <div className="errors">{errorState.slice(22, -2)}</div>
            ) : null}
            <input
              type="submit"
              value={
                authState !== "succeeded" ? "Create Account" : "Loading..."
              }
            />
            <button>
              <img src={google} role="presentation" />
              <span>Sign Up woth Google</span>
            </button>
          </div>
          <p>
            Already have account?{" "}
            <Link to="/login" className="form-link">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
