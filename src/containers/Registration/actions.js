/* eslint-disable prefer-destructuring */
import {
  DEFAULT_ACTION,
  SET_TEAM_IMAGE,
  SET_ID_CARD_IMAGE,
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_PERSON_DATA,
  SET_TEAM_NAME,
  SET_SHOW_PLAYER,
  SUBMIT,
  LOADING,
  UPDATE_LOADING
} from "./constants";

import { futsalFirestore, storage } from "../../config/firebaseConfig";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}
function error(message) {
  // eslint-disable-next-line no-undef
  alert(message);
  return dispatch => {
    dispatch(defaultAction());
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

export function setTeamName(e) {
  return {
    type: SET_TEAM_NAME,
    payload: e.target.value
  };
}

export function setTeamImage(e) {
  return {
    type: SET_TEAM_IMAGE,
    payload: e.currentTarget.files[0]
  };
}

export function setIdCardImage(e, id, data) {
  const personData = Array.from(data);
  personData[id][4] = e.currentTarget.files[0];
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

export function setShowPlayer(index, nowIndex, personData) {
  return dispatch => {
    if (personData[nowIndex][4] != null && personData[nowIndex][0] !== "") {
      dispatch({
        type: SET_SHOW_PLAYER,
        showPlayer: index
      });
    } else {
      dispatch(error("Please fill the last form"));
    }
  };
}
export function deletePlayer(nowPlayer, personData, index) {
  const newNumberPlayer = Array.from(nowPlayer);
  newNumberPlayer.splice(index, 1); // delete from array
  const newPersonData = Array.from(personData);
  newPersonData.splice(index, 1); // delete from array
  const newShowPlayer = newPersonData.length - 1;
  return {
    type: DELETE_PLAYER,
    personData: newPersonData,
    numberPlayer: newNumberPlayer,
    showPlayer: newShowPlayer
  };
}

export function addPlayer(nowPlayer, personData, nowIndex) {
  return dispatch => {
    const numberPlayer = Array.from(nowPlayer);
    if (
      nowIndex === 0 ||
      (personData[nowIndex][4] != null && personData[nowIndex][0] !== "")
    ) {
      personData.push(["", "", "", "", null]);
      numberPlayer.push("aa");
    } else {
      dispatch(error("Please fill the last form"));
    }
    const showPlayer = numberPlayer.length;
    dispatch({
      type: ADD_PLAYER,
      payload: numberPlayer,
      showplayer: showPlayer
    });
  };
}

function uploadTeam(idTeam, teamName, personData, teamImage) {
  return dispatch => {
    futsalFirestore.doc(`${teamName}-${idTeam}`).set({
      nama: teamName,
      teamLogo: `futsal/${teamName}-${idTeam}/${teamName}-logo.jpg`,
      namaLengkap_manager: personData[0][0],
      kontak_manager: personData[0][1],
      email_manager: personData[0][2],
      telepon_manager: personData[0][3],
      idCard_manager: `futsal/${teamName}-${idTeam}/manager-idCard.jpg`
    });
    storage
      .child(`futsal/${teamName}-${idTeam}/${teamName}-logo.jpg`)
      .put(teamImage)
      .then(function() {
        console.log("team image uploaded");
        dispatch(updateLoad());
        dispatch({
          type: SUBMIT
        });
      });
    storage
      .child(`futsal/${teamName}-${idTeam}/manager-idCard.jpg`)
      .put(personData[0][4])
      .then(function() {
        console.log("manager image uploaded");
        dispatch(updateLoad());
        dispatch({
          type: SUBMIT
        });
      });
  };
}

function uploadPlayer(idTeam, playerData, teamName) {
  return dispatch => {
    playerData.forEach((x, index) => {
      futsalFirestore
        .doc(`${teamName}-${idTeam}`)
        .collection("player")
        .doc(`${x[0]}-${index}`)
        .set({
          namaLengkap: x[0],
          kontak: x[1],
          email: x[2],
          telepon: x[3],
          idCard: `futsal/${teamName}-${idTeam}/${x[0]}-${index}-idCard.jpg`
        });
      storage
        .child(`futsal/${teamName}-${idTeam}/${x[0]}-${index}-idCard.jpg`)
        .put(x[4])
        .then(function() {
          console.log("player image uploaded");
          dispatch(updateLoad());
          dispatch({
            type: SUBMIT
          });
        });
    });
  };
}

export function submit(personData, teamImage, teamName) {
  let check = true;
  personData.forEach(x => {
    if (x[4] == null || x[0] === "") {
      check = false;
    }
  });
  if (teamImage == null) {
    check = false;
  }
  let teams;
  if (check) {
    return dispatch => {
      dispatch(loading(personData.length + 1));
      futsalFirestore.get().then(response => {
        teams = response.docs;
        console.log(teams.length);
        dispatch(uploadTeam(teams.length, teamName, personData, teamImage));

        const playerData = personData.slice(1);
        dispatch(uploadPlayer(teams.length, playerData, teamName));
      });
    };
  }
  return dispatch => {
    dispatch(error("Please fill the last form"));
  };
}
