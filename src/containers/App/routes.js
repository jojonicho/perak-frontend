// import Registration from "../Registration";
// import RegisterSelection from "../../components/RegisterSelection";
import LandingPage from "../LandingPage";
import RegisterSelection from "../../components/RegisterSelection";

export const routes = [
  {
    component: LandingPage,
    exact: true,
    path: "/"
  },
  {
    component: RegisterSelection,
    exact: true,
    path: "/daftar"
  }
  // {
  //   component: Registration,
  //   exact: true,
  //   path: "/daftar/futsal"
  // }
];
