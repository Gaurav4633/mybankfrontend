import { useState } from "react";

import API from "../api/api";

function CheckBalance() {

  const [accountNumber, setAccountNumber] =
    useState("");

  const [account, setAccount] =
    useState(null);

  const checkBalance = async () => {

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
        Check Balance
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
          onClick={checkBalance}
        >
          Check Balance
        </button>

      </div>

      {
        account && (

          <div className="account-table-container">

            <table className="account-table">

              <tbody>

                <tr>
                  <td>Account Number</td>
                  <td>{account.accountNumber}</td>
                </tr>

                <tr>
                  <td>Customer Name</td>
                  <td>{account.fullName}</td>
                </tr>

                <tr>
                  <td>Balance</td>
                  <td>₹{account.balance}</td>
                </tr>

                <tr>
                  <td>Account Type</td>
                  <td>{account.accountType}</td>
                </tr>

                <tr>
                  <td>Branch</td>
                  <td>{account.branch}</td>
                </tr>

              </tbody>

            </table>

          </div>
        )
      }

    </section>
  );
}

export default CheckBalance;