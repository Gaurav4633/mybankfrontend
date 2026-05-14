import PageHeader from "../components/PageHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function CreateAccount() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    balance: "",
    accountType: "",
    branch: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/api/accounts",
        formData
      );

      console.log(response.data);

      navigate(`/account-success/${response.data.id}`);

    } catch (error) {

      console.error(error);

      alert("Error Creating Account");
    }
  };

  return (

    <section>

      <PageHeader
        title="Create Account"
        description="Add a new customer account."
      />

      <form className="bank-form" onSubmit={handleSubmit}>

        <div className="create-form-grid">

          <label className="form-label">
            Full Name
            <input
              className="form-input"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>

          <label className="form-label">
            Email
            <input
              className="form-input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="form-label">
            Phone Number
            <input
              className="form-input"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <label className="form-label">
            Balance
            <input
              className="form-input"
              placeholder="Balance"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
            />
          </label>

          <label className="form-label">
            Account Type
            <select
              className="form-input"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
              <option value="Fixed Deposit">Fixed Deposit</option>
            </select>
          </label>

          <label className="form-label">
            Branch
            <input
              className="form-input"
              placeholder="Branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            />
          </label>

        </div>

        <button type="submit" className="form-button">
          Create Account
        </button>

      </form>

    </section>
  );
}

export default CreateAccount;