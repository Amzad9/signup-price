import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/counterSlice";
import Input from "../components/input";

function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    countryCode: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    password: formData.password.trim(),
    mobile: formData.mobile.trim(),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit form
      console.log(formData);
    } else {
      setErrors(formErrors);
    }
    dispatch(addUser(payload));
  };

  const validateForm = () => {
    const errors = {};
    const { name, email, password, confirmPassword, countryCode, mobile } =
      formData;

    // Name validation
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!name) {
      errors.name = "Name is required";
    } else if (name.length > 40) {
      errors.name = "Name should be less than or equal to 40 characters";
    } else if (!nameRegex.test(name)) {
      errors.name = "Name should not contain special characters";
    }

    // Email validation
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const yopmailRegex = /@yopmail\.com$/;
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is not valid";
    } else if (yopmailRegex.test(email)) {
      errors.email = "Yopmail IDs are not allowed";
    } else if (email !== email.toLowerCase()) {
      errors.email = "Email should not contain uppercase letters";
    }

    // Password validation
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 7 || password.length > 12) {
      errors.password = "Password should be between 7 and 12 characters";
    } else if (!passwordRegex.test(password)) {
      errors.password = "Password should not contain spaces";
    }

    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Country code validation
    const countryCodeRegex = /^\+?[0-9]+$/;
    if (countryCode && !countryCodeRegex.test(countryCode)) {
      errors.countryCode = "Invalid country code";
    }

    // mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobile) {
      errors.mobile = "Mobile is required";
    } else if (mobile.length !== 10) {
      errors.mobile = "Mobile number must be exactly 10 digits";
    } else if (mobile.length == 10) {
      errors.mobile = "";
    } else if (!mobileRegex.test(mobile)) {
      errors.mobile = "Mobile number is not valid";
    }

    return errors;
  };

  // console.log(errors, "error");

  return (
    <div>
      <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-gray-100 border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign Up
              </h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <Input
                    type="text"
                    value={formData.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  {errors.name && (
                    <div className="text-xs text-red-600">{errors.name}</div>
                  )}
                  <Input
                    type="text"
                    value={formData.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  {errors.email && (
                    <div className="text-xs text-red-600">{errors.email}</div>
                  )}

                  <Input
                    type="password"
                    value={formData.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  {errors.password && (
                    <div className="text-xs text-red-600">
                      {errors.password}
                    </div>
                  )}

                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  {errors.confirmPassword && (
                    <div className="text-xs text-red-600">
                      {errors.confirmPassword}
                    </div>
                  )}

                  <Input
                    type="tel"
                    value={formData.mobile}
                    name="mobile"
                    placeholder="Mobile-Number"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                  />
                  {errors.mobile && (
                    <div className="text-xs text-red-600">{errors.mobile}</div>
                  )}

                  <button
                    type="submit"
                    className="py-3 px-4 bg-blue-600 text-white inline-flex justify-center items-center gap-2 rounded-md border"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Create an Account?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    to="/register"
                  >
                    {" "}
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
