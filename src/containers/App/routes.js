import Registration from "../Registration";
import RegisterSelection from "../../components/RegisterSelection";

export const routes = [
  {
    component: RegisterSelection,
    exact: true,
    path: "/"
  },
  {
    component: RegisterSelection,
    exact: true,
    path: "/daftar"
  },
  {
    component: Registration,
    exact: true,
    path: "/daftar/futsal"
  }
];
