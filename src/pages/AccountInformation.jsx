import { useState } from "react";

import API from "../api/api";

function AccountInformation() {

  const [accountNumber, setAccountNumber] =
    useState("");

  const [account, setAccount] =
    useState(null);

  const fetchAccount = async () => {

    try {

      const response = await API.get(
        `/accounts/balance/${accountNumber}`
      );

      console.log(response.data);

      setAccount(response.data);

    } catch (error) {

      console.error(error);

      alert("Account Not Found");
    }
  };

  return (

    <section>

      <h1>
        Account Information
      </h1>

      <div className="bank-form">

        <input
          className="form-input"
          type="text"
          placeholder="Enter Account Number"
          value={accountNumber}
          onChange={(e) =>
            setAccountNumber(e.target.value)
          }
        />

        <button
          className="form-button"
          onClick={fetchAccount}
        >
          Get Account Details
        </button>

      </div>

      {
        account && (

          <div className="account-table-container">

            <table className="account-table">

              <tbody>

                <tr>
                  <td>Name</td>
                  <td>{account.fullName}</td>
                </tr>

                <tr>
                  <td>Email</td>
                  <td>{account.email}</td>
                </tr>

                <tr>
                  <td>Phone Number</td>
                  <td>{account.phoneNumber}</td>
                </tr>

                <tr>
                  <td>Branch</td>
                  <td>{account.branch}</td>
                </tr>

                <tr>
                  <td>Account Type</td>
                  <td>{account.accountType}</td>
                </tr>

                <tr>
                  <td>Account Number</td>
                  <td>{account.accountNumber}</td>
                </tr>

                <tr>
                  <td>Balance</td>
                  <td>₹{account.balance}</td>
                </tr>

              </tbody>

            </table>

          </div>
        )
      }

    </section>

    
    
  );
}

export default AccountInformation;