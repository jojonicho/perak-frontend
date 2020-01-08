import { DEFAULT_ACTION, SET_PERSON_DATA } from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function setPersonData(e, gameId, personId, data) {
  const personData = Array.from(data);
  const { target } = e;
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
  personData[personId][index] = target.value;
  return {
    type: SET_PERSON_DATA,
    idGame: gameId,
    payload: personData
  };
}
