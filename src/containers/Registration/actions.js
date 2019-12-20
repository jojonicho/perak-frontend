import { DEFAULT_ACTION, SET_TEAM_IMAGE, ADD_PLAYER } from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function setTeamImage(e) {
  return {
    type: SET_TEAM_IMAGE,
    payload: e.currentTarget.files[0]
  };
}

export function addPlayer(nowPlayer) {
  console.log(nowPlayer);
  const numberPlayer = Array.from(nowPlayer);
  numberPlayer.push("aa");
  return {
    type: ADD_PLAYER,
    payload: numberPlayer
  };
}
