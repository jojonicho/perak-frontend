import React from "react";
// import Registration from "../Registration";
// import RegisterSelection from "../../components/RegisterSelection";
// import LandingPage from "../LandingPage";
// import GameRegistration from "../GameRegistration";
import LandingPage2 from "../LandingPage2";
import FutsalScorePage from "../FutsalScorePage";
import KlasemenPage from "../KlasemenPage";
import ChallongeScore from "../ChallongeScore";
import GroupProfile from "../../components/GroupProfile";
// import BirBintangRegistration from "../BirBintangRegistration";
import OpenTenantRegistration from "../OpenTenantRegistration";
import NoMatch from "../NoMatch";

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
    component: () => <KlasemenPage id="futsal" />,
    exact: true,
    path: "/klasemen/futsal"
  },
  {
    component: () => <KlasemenPage id="dota" />,
    exact: true,
    path: "/klasemen/dota"
  },
  {
    component: () => <KlasemenPage id="csgo" />,
    exact: true,
    path: "/klasemen/csgo"
  },
  {
    component: () => <ChallongeScore gameId="dota" />,
    exact: true,
    path: "/result/dota"
  },
  {
    component: () => <ChallongeScore gameId="csgo" />,
    exact: true,
    path: "/result/csgo"
  },
  {
    component: () => <ChallongeScore gameId="catur" />,
    exact: true,
    path: "/result/catur"
  },
  {
    component: () => <ChallongeScore gameId="ssbu" />,
    exact: true,
    path: "/result/ssbu"
  },
  {
    component: () => <ChallongeScore gameId="fifa" />,
    exact: true,
    path: "/result/fifa"
  },
  {
    component: () => <ChallongeScore gameId="codenames" />,
    exact: true,
    path: "/result/codenames"
  },
  {
    component: () => <ChallongeScore gameId="mlbb" />,
    exact: true,
    path: "/result/mlbb"
  },
  {
    component: () => <ChallongeScore gameId="mariokart" />,
    exact: true,
    path: "/result/mariokart"
  },
  {
    component: GroupProfile,
    exact: true,
    path: "/team/:id"
  },
  {
    component: OpenTenantRegistration,
    exact: true,
    path: "/daftar/bazaar"
  },
  {
    component: NoMatch,
    exact: false
  }
  // {
  //   component: BirBintangRegistration,
  //   exact: true,
  //   path: "/daftar/birbintang"
  // },
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
