import { useState } from "react";

import API from "../api/api";

function DepositMoney() {

  const [accountNumber, setAccountNumber] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [depositData, setDepositData] =
    useState(null);

  const depositMoney = async () => {

    try {

      const response = await API.put(
        `/accounts/deposit/${accountNumber}?amount=${amount}`
      );

      console.log(response.data);

      setDepositData(response.data);

      alert("Money Deposited Successfully");

    } catch (error) {

      console.error(error);

      alert("Deposit Failed");
    }
  };

  return (

    <section>

      <h1>
        Deposit Money
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

        <input
          className="form-input"
          type="number"
          placeholder="Enter Deposit Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <button
          className="form-button"
          onClick={depositMoney}
        >
          Deposit Money
        </button>

      </div>

      {
        depositData && (

          <div className="account-table-container">

            <table className="account-table">

              <tbody>

                <tr>
                  <td>Account Number</td>
                  <td>{depositData.accountNumber}</td>
                </tr>

                <tr>
                  <td>Customer Name</td>
                  <td>{depositData.fullName}</td>
                </tr>

                <tr>
                  <td>Old Balance</td>
                  <td>₹{depositData.oldBalance}</td>
                </tr>

                <tr>
                  <td>Deposit Amount</td>
                  <td>₹{depositData.depositAmount}</td>
                </tr>

                <tr>
                  <td>New Balance</td>
                  <td>₹{depositData.newBalance}</td>
                </tr>

              </tbody>

            </table>

          </div>
        )
      }

    </section>
  );
}

export default DepositMoney;