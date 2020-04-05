import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import LockScreenPage from "views/Pages/LockScreenPage.jsx";

// material-ui-icons
import PersonAdd from "material-ui-icons/PersonAdd";
import Fingerprint from "material-ui-icons/Fingerprint";
import LockOpen from "material-ui-icons/LockOpen";
import ForgotPassword from "../views/Pages/ForgotPassword";

const pagesRoutes = [
  {
    path: "/pages/register-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/pages/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  // {
  //   path: "/pages/lock-screen-page",
  //   name: "Lock Screen Page",
  //   short: "Lock",
  //   mini: "LSP",
  //   icon: LockOpen,
  //   component: LockScreenPage
  // },
  {
    path: "/pages/forgot-password",
    name: "Forgot Password",
    short: "Forgot Password",
    icon: LockOpen,
    component: ForgotPassword
  },
  {
    redirect: true,
    path: "/pages",
    pathTo: "/pages/login-page",
    name: "Login Page"
  }
];

export default pagesRoutes;
