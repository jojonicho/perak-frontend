/* eslint-disable prefer-destructuring */
import {
  DEFAULT_ACTION,
  SET_TEAM_IMAGE,
  SET_ID_CARD_IMAGE,
  ADD_PLAYER
} from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function setTeamImage(e) {
  console.log(e);
  return {
    type: SET_TEAM_IMAGE,
    payload: e.currentTarget.files[0]
  };
}

export function setIdCardImage(e, id, idCard) {
  const idCardImage = Array.from(idCard);
  idCardImage[id] = e.currentTarget.files[0];
  console.log(idCardImage);
  return {
    type: SET_ID_CARD_IMAGE,
    payload: idCardImage
  };
}

export function addPlayer(nowPlayer, idCardImage) {
  const numberPlayer = Array.from(nowPlayer);
  idCardImage.push(null);
  numberPlayer.push("aa");
  console.log(numberPlayer);
  console.log(idCardImage);
  return {
    type: ADD_PLAYER,
    payload: numberPlayer
  };
}
