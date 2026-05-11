import {
  LayoutDashboard,
  UserPlus,
  Search,
  Wallet,
  ArrowDownCircle,
  History,
  CreditCard,
    ShieldCheck,
} from "lucide-react";

const modules = [

 {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  

  {
    title: "Create Account",
    path: "/create-account",
    icon: UserPlus,
  },

  {
    title: "Account Information",
    path: "/account-information",
    icon: Search,
  },

  {
    title: "Deposit Money",
    path: "/deposit-money",
    icon: Wallet,
  },

  {
    title: "Withdraw Money",
    path: "/withdraw-money",
    icon: ArrowDownCircle,
  },

  {
    title: "Transaction History",
    path: "/transaction-history",
    icon: History,
  },

  {
    title: "Check Balance",
    path: "/check-balance",
    icon: CreditCard,
  },


  {
  title: "Project Overview",
  path: "/project-overview",
  icon: ShieldCheck,
}

];


export default modules;