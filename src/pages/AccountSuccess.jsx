import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../api/api";

function AccountSuccess() {

  const { id } = useParams();

  const [account, setAccount] =
    useState(null);

  useEffect(() => {

    fetchAccount();

  }, []);

  const fetchAccount = async () => {

    try {

      const response = await API.get(
        `/accounts/${id}`
      );

      console.log(response.data);

      setAccount(response.data);

    } catch (error) {

      console.error(error);

      alert("Account Not Found");
    }
  };

  if (!account) {

    return <h2>Loading...</h2>;
  }

  return (

    <section>

      <h1>
        Account Created Successfully
      </h1>

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

    </section>
  );
}

export default AccountSuccess;