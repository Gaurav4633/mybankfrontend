import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",
    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(

          "/users/login",

          formData
        );

      console.log(response.data);

      if (response.data) {

        alert("Login Successful");

        navigate("/");

      } else {

        alert(
          "Invalid Email or Password"
        );
      }

    } catch (error) {

      console.error(error);

      alert("Login Failed");
    }
  };

  return (

    <section>

      <h1>
        Login
      </h1>

      <form
        className="bank-form"
        onSubmit={handleLogin}
      >

        <input
          className="form-input"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="form-button"
        >
          Login
        </button>

      </form>

    </section>
  );
}

export default Login;