import Registration from "../Registration";
import RegisterSelection from "../../components/RegisterSelection";

export const routes = [
  {
    component: RegisterSelection,
    exact: true,
    path: "/"
  },
  {
    component: Registration,
    exact: true,
    path: "/register/futsal"
  }
];
