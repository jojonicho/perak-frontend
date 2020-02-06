// import React from "react";
// import Registration from "../Registration";
// import RegisterSelection from "../../components/RegisterSelection";
// import LandingPage from "../LandingPage";
// import GameRegistration from "../GameRegistration";
import LandingPage2 from "../LandingPage2";
import FutsalScorePage from "../FutsalScorePage";
import KlasemenPage from "../KlasemenPage";
import GroupProfile from "../../components/GroupProfile";

export const routes = [
  {
    component: LandingPage2,
    exact: true,
    path: "/"
  },
  {
    component: FutsalScorePage,
    exact: true,
    path: "/result/futsal"
  },
  {
    component: KlasemenPage,
    exact: true,
    path: "/klasemen"
  },
  {
    component: GroupProfile,
    exact: true,
    path: "/groupprofile"
  }
  // {
  //   component: RegisterSelection,
  //   exact: true,
  //   path: "/daftar"
  // },
  // {
  //   component: Registration,
  //   exact: true,
  //   path: "/daftar/futsal"
  // },
  // {
  //   component: () => <GameRegistration gameId="dota" />,
  //   exact: true,
  //   path: "/daftar/dota"
  // },
  // {
  //   component: () => <GameRegistration gameId="csgo" />,
  //   exact: true,
  //   path: "/daftar/csgo"
  // },
  // {
  //   component: () => <GameRegistration gameId="mlbb" />,
  //   exact: true,
  //   path: "/daftar/mlbb"
  // },
  // {
  //   component: () => <GameRegistration gameId="ssbu" />,
  //   exact: true,
  //   path: "/daftar/ssbu"
  // },
  // {
  //   component: () => <GameRegistration gameId="mariokart" />,
  //   exact: true,
  //   path: "/daftar/mariokart"
  // },
  // {
  //   component: () => <GameRegistration gameId="fifa" />,
  //   exact: true,
  //   path: "/daftar/fifa"
  // },
  // {
  //   component: () => <GameRegistration gameId="codenames" />,
  //   exact: true,
  //   path: "/daftar/codenames"
  // },
  // {
  //   component: () => <GameRegistration gameId="catur" />,
  //   exact: true,
  //   path: "/daftar/catur"
  // },
];
