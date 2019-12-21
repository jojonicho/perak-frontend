/* eslint-disable prefer-destructuring */
import {
  DEFAULT_ACTION,
  SET_TEAM_IMAGE,
  SET_ID_CARD_IMAGE,
  ADD_PLAYER,
  SET_PERSON_DATA
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

export function setIdCardImage(e, id, data) {
  const personData = Array.from(data);
  personData[id][4] = e.currentTarget.files[0];
  console.log(personData);
  return {
    type: SET_ID_CARD_IMAGE,
    payload: personData
  };
}

export function setPersonData(e, id, data) {
  const personData = Array.from(data);
  const target = e.target;
  let index;
  if (target.id === "nama-lengkap") {
    index = 0;
  } else if (target.id === "kontak") {
    index = 1;
  } else if (target.id === "email") {
    index = 2;
  } else if (target.id === "telepon") {
    index = 3;
  }
  personData[id][index] = target.value;
  return {
    type: SET_PERSON_DATA,
    payload: personData
  };
}

export function addPlayer(nowPlayer, personData) {
  const numberPlayer = Array.from(nowPlayer);
  personData.push(["", "", "", "", null]);
  numberPlayer.push("aa");
  console.log(numberPlayer);
  console.log(personData);
  return {
    type: ADD_PLAYER,
    payload: numberPlayer
  };
}
