import {
  DEFAULT_ACTION,
  SET_PERSON_DATA,
  ALERT,
  // LOADING,
  // UPDATE_LOADING,
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_SHOW_PLAYER,
  SET_TEAM_NAME
} from "./constants";
import { SUBMIT } from "../Registration/constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function stopAlert() {
  return {
    type: ALERT,
    payload: null
  };
}

function error(message) {
  return dispatch => {
    dispatch({
      type: ALERT,
      payload: message
    });
  };
}

// function loading(baseLoad) {
//   return {
//     type: LOADING,
//     loadBase: baseLoad
//   };
// }

// function updateLoad() {
//   return {
//     type: UPDATE_LOADING
//   };
// }

export function setShowPlayer(gameId, index, nowIndex, personData) {
  return dispatch => {
    if (personData[nowIndex][0] !== "") {
      dispatch({
        type: SET_SHOW_PLAYER,
        showPlayer: index,
        idGame: gameId
      });
    } else {
      dispatch(error("Pastikan Seluruh Form Sudah Terisi"));
    }
  };
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

export function addPlayer(gameId, personData, nowIndex) {
  return dispatch => {
    const newPersonData = Array.from(personData);
    console.log(newPersonData);
    if (
      newPersonData[0][0] !== "" &&
      newPersonData[0][1] !== "" &&
      newPersonData[0][2] !== "" &&
      newPersonData[0][3] !== "" &&
      newPersonData[nowIndex][0] !== ""
    ) {
      newPersonData.push(["", "", "", ""]);
    } else {
      dispatch(error("Pastikan Seluruh Form Sudah Terisi"));
    }
    dispatch({
      type: ADD_PLAYER,
      idGame: gameId,
      payload: newPersonData
    });
  };
}

export function deletePlayer(gameId, personData, index) {
  const newPersonData = Array.from(personData);
  newPersonData.splice(index, 1); // delete from array
  return {
    type: DELETE_PLAYER,
    payload: newPersonData,
    idGame: gameId
  };
}

export function setTeamName(e, gameId) {
  return {
    type: SET_TEAM_NAME,
    payload: e.target.value,
    idGame: gameId
  };
}

export function submit(gameId, personData, teamName) {
  console.log(`submit${gameId} ${teamName}`);
  return {
    type: SUBMIT
  };
}
