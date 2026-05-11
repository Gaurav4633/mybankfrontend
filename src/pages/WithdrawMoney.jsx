import { useState } from "react";

import API from "../api/api";

function WithdrawMoney() {

  const [accountNumber, setAccountNumber] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [withdrawData, setWithdrawData] =
    useState(null);

  const withdrawMoney = async () => {

    try {

      const response = await API.put(
        `/accounts/withdraw/${accountNumber}?amount=${amount}`
      );

      console.log(response.data);

      if (!response.data) {

        alert("Insufficient Balance");

        return;
      }

      setWithdrawData(response.data);

      alert("Money Withdrawn Successfully");

    } catch (error) {

      console.error(error);

      alert("Withdraw Failed");
    }
  };

  return (

    <section>

      <h1>
        Withdraw Money
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
          placeholder="Enter Withdraw Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <button
          className="form-button"
          onClick={withdrawMoney}
        >
          Withdraw Money
        </button>

      </div>

      {
        withdrawData && (

          <div className="account-table-container">

            <table className="account-table">

              <tbody>

                <tr>
                  <td>Account Number</td>
                  <td>{withdrawData.accountNumber}</td>
                </tr>

                <tr>
                  <td>Customer Name</td>
                  <td>{withdrawData.fullName}</td>
                </tr>

                <tr>
                  <td>Old Balance</td>
                  <td>₹{withdrawData.oldBalance}</td>
                </tr>

                <tr>
                  <td>Withdraw Amount</td>
                  <td>₹{withdrawData.withdrawAmount}</td>
                </tr>

                <tr>
                  <td>New Balance</td>
                  <td>₹{withdrawData.newBalance}</td>
                </tr>

              </tbody>

            </table>

          </div>
        )
      }

    </section>
  );
}

export default WithdrawMoney;