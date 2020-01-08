import React from "react";
import Registration from "../Registration";
import RegisterSelection from "../../components/RegisterSelection";
import LandingPage from "../LandingPage";
import GameRegistration from "../GameRegistration";

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
  },
  {
    component: Registration,
    exact: true,
    path: "/daftar/futsal"
  },
  {
    component: () => <GameRegistration gameId="dota" />,
    exact: true,
    path: "/daftar/game"
  }
];
