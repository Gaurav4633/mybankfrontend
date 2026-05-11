import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/api";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      fullName: "",

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

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(

          "/users/signup",

          formData
        );

      console.log(response.data);

      alert(
        "Signup Successful"
      );

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert("Signup Failed");
    }
  };

  return (

    <section>

      <h1>
        Signup
      </h1>

      <form
        className="bank-form"
        onSubmit={handleSignup}
      >

        <input
          className="form-input"
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

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
          Signup
        </button>

      </form>

    </section>
  );
}

export default Signup;