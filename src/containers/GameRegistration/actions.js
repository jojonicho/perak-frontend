import {
  Games,
  DEFAULT_ACTION,
  SET_PERSON_DATA,
  ALERT,
  LOADING,
  UPDATE_LOADING,
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_SHOW_PLAYER,
  SET_TEAM_NAME,
  SHOW_FORM,
  SAVE_PLAYER
  // SUBMIT
} from "./constants";

import { firestore } from "../../config/firebaseConfig";

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

function loading(baseLoad) {
  return {
    type: LOADING,
    loadBase: baseLoad
  };
}

function updateLoad() {
  return {
    type: UPDATE_LOADING
  };
}

function showForm(gameId, state) {
  return {
    type: SHOW_FORM,
    payload: state,
    idGame: gameId
  };
}

export function setShowPlayer(gameId, index, nowIndex, personData) {
  return dispatch => {
    if (personData[nowIndex][0] !== "") {
      dispatch({
        type: SET_SHOW_PLAYER,
        showPlayer: index,
        idGame: gameId
      });
      dispatch(showForm(gameId, true));
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

export function savePlayer(gameId, personData, nowIndex) {
  const newPersonData = Array.from(personData);
  return dispatch => {
    if (
      newPersonData[0][0] !== "" &&
      newPersonData[0][1] !== "" &&
      newPersonData[0][2] !== "" &&
      newPersonData[0][3] !== "" &&
      newPersonData[nowIndex][0] !== ""
    ) {
      dispatch(showForm(gameId, false));
    } else {
      dispatch(error("Pastikan Seluruh Form Sudah Terisi"));
    }
    dispatch({
      type: SAVE_PLAYER,
      idGame: gameId
    });
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
      dispatch(showForm(gameId, true));
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
  return dispatch => {
    const newPersonData = Array.from(personData);
    newPersonData.splice(index, 1); // delete from array
    dispatch(showForm(gameId, true));
    dispatch({
      type: DELETE_PLAYER,
      payload: newPersonData,
      idGame: gameId
    });
  };
}

export function setTeamName(e, gameId) {
  return {
    type: SET_TEAM_NAME,
    payload: e.target.value,
    idGame: gameId
  };
}

function uploadTeam(gameId, idTeam, teamName, personData) {
  return dispatch => {
    firestore
      .collection(gameId)
      .doc(`${teamName}-${idTeam}`)
      .set({
        namaTim: teamName,
        namaLengkap_kapten: personData[0][0],
        kontak_kapten: personData[0][1],
        email_kapten: personData[0][2],
        telepon_kapten: personData[0][3]
      })
      .then(() => {
        dispatch(updateLoad());
      });
  };
}

function uploadPlayer(gameId, idTeam, playerData, teamName) {
  return dispatch => {
    playerData.forEach((x, index) => {
      firestore
        .collection(gameId)
        .doc(`${teamName}-${idTeam}`)
        .collection("player")
        .doc(`${x[0]}-${index}`)
        .set({
          namaLengkap: x[0],
          kontak: x[1],
          email: x[2],
          telepon: x[3]
        })
        .then(() => {
          dispatch(updateLoad());
        });
    });
  };
}

export function submit(gameId, personData, teamName) {
  let message;
  let check = true;
  const Game = Games[gameId];
  if (personData.length < Game.fixMember) {
    check = false;
    message = `Minimum Pemain harus ${Game.fixMember}`;
  }
  personData.forEach((x, i) => {
    if (
      (i === 0 && (x[1] === "" || x[2] === "" || x[3] === "")) ||
      x[0] === ""
    ) {
      check = false;
      message = "Pastikan Seluruh Nama Pemain Sudah Terisi";
    }
  });
  if (
    (gameId === "csgo" || gameId === "dota" || gameId === "mlbb") &&
    teamName === ""
  ) {
    check = false;
    message = "Pastikan Anda Sudah Memasukan Nama Tim Anda";
  }
  let namaTim = personData[0][0];
  if (teamName !== "") {
    namaTim = teamName;
  }
  let teams;
  if (check) {
    return dispatch => {
      dispatch(loading(personData.length));
      firestore
        .collection(gameId)
        .get()
        .then(response => {
          teams = response.docs;
          console.log(`submit${gameId} ${namaTim}`);
          dispatch(uploadTeam(gameId, teams.length, namaTim, personData));
          const playerData = personData.slice(1);
          dispatch(uploadPlayer(gameId, teams.length, playerData, namaTim));
        });
    };
  }
  return dispatch => {
    dispatch(error(message));
  };
}
