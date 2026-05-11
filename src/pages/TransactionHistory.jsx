import { useState } from "react";

import API from "../api/api";

function TransactionHistory() {

  const [accountNumber, setAccountNumber] =
    useState("");

  const [transactions, setTransactions] =
    useState([]);

  const fetchTransactions = async () => {

    try {

      const response = await API.get(
        `/transactions/${accountNumber}`
      );

      console.log(response.data);

      setTransactions(response.data);

    } catch (error) {

      console.error(error);

      alert("No Transactions Found");
    }
  };

  return (

    <section>

      <h1>
        Transaction History
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
          onClick={fetchTransactions}
        >
          Get History
        </button>

      </div>

      {
        transactions.length > 0 && (

          <div className="table-container">

            <table className="transaction-table">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Name</th>

                  <th>Account Number</th>

                  <th>Type</th>

                  <th>Amount</th>

                  <th>Date</th>

                  <th>Time</th>

                </tr>

              </thead>

              <tbody>

                {
                  transactions.map((transaction) => (

                    <tr key={transaction.id}>

                      <td>
                        {transaction.id}
                      </td>

                      <td>
                        {transaction.fullName}
                      </td>

                      <td>
                        {transaction.accountNumber}
                      </td>

                      <td>
                        {transaction.transactionType}
                      </td>

                      <td>
                        ₹{transaction.amount}
                      </td>

                      <td>
                        {transaction.transactionDate}
                      </td>

                      <td>
                        {transaction.transactionTime}
                      </td>

                    </tr>
                  ))
                }

              </tbody>

            </table>

          </div>
        )
      }

    </section>
  );
}

export default TransactionHistory;