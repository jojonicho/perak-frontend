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
    path: "/daftar/dota"
  },
  {
    component: () => <GameRegistration gameId="csgo" />,
    exact: true,
    path: "/daftar/csgo"
  },
  {
    component: () => <GameRegistration gameId="mlbb" />,
    exact: true,
    path: "/daftar/mlbb"
  },
  {
    component: () => <GameRegistration gameId="ssbu" />,
    exact: true,
    path: "/daftar/ssbu"
  },
  {
    component: () => <GameRegistration gameId="mariokart" />,
    exact: true,
    path: "/daftar/mariokart"
  },
  {
    component: () => <GameRegistration gameId="fifa" />,
    exact: true,
    path: "/daftar/fifa"
  },
  {
    component: () => <GameRegistration gameId="codenames" />,
    exact: true,
    path: "/daftar/codenames"
  },
  {
    component: () => <GameRegistration gameId="catur" />,
    exact: true,
    path: "/daftar/catur"
  }
];
