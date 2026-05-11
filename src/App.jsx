import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AccountInformation from "./pages/AccountInformation";
import CheckBalance from "./pages/CheckBalance";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import DepositMoney from "./pages/DepositMoney";
import TransactionHistory from "./pages/TransactionHistory";
import WithdrawMoney from "./pages/WithdrawMoney";
import AccountSuccess from "./pages/AccountSuccess";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProjectOverview from "./pages/ProjectOverview";
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account-information" element={<AccountInformation />} />
        <Route path="/deposit-money" element={<DepositMoney />} />
        <Route path="/withdraw-money" element={<WithdrawMoney />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/check-balance" element={<CheckBalance />} />
        <Route path="/account-success/:id" element={<AccountSuccess />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project-overview" element={<ProjectOverview />} />
      </Route>
    </Routes>
  );
}

export default App;
