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
  UPDATE_LOADING,
  SET_SELF_IMAGE,
  ALERT,
  SHOW_FORM,
  SAVE_PLAYER
} from "./constants";

import { futsalFirestore, storage } from "../../config/firebaseConfig";

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
  // eslint-disable-next-line no-undef
  // alert(message);
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

export function setTeamName(e) {
  return {
    type: SET_TEAM_NAME,
    payload: e.target.value
  };
}

export function setTeamImage(e) {
  return dispatch => {
    const file = e.currentTarget.files[0];
    if (
      !file ||
      (["image/png", "image/jpeg"].includes(file.type) && file.size < 4000000)
    ) {
      dispatch({
        type: SET_TEAM_IMAGE,
        payload: file
      });
    } else {
      dispatch(error("Pastikan Ukuran Gambar dibawah 4 MB"));
    }
  };
}

export function setFoto(e, id, data) {
  return dispatch => {
    const personData = Array.from(data);
    const file = e.currentTarget.files[0];
    console.log(e.currentTarget.files[0]);
    if (
      !file ||
      (["image/png", "image/jpeg"].includes(file.type) && file.size < 4000000)
    ) {
      personData[id][5] = e.currentTarget.files[0];
    } else {
      dispatch(error("Pastikan Ukuran Gambar dibawah 4 MB"));
    }
    dispatch({
      type: SET_SELF_IMAGE,
      payload: personData
    });
  };
}

export function setIdCardImage(e, id, data) {
  return dispatch => {
    const personData = Array.from(data);
    const file = e.currentTarget.files[0];
    console.log(e.currentTarget.files[0]);
    if (
      !file ||
      (["image/png", "image/jpeg"].includes(file.type) && file.size < 4000000)
    ) {
      personData[id][4] = e.currentTarget.files[0];
    } else {
      dispatch(error("Pastikan Ukuran Gambar dibawah 4 MB"));
    }
    dispatch({
      type: SET_ID_CARD_IMAGE,
      payload: personData
    });
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

function showForm(state) {
  return {
    type: SHOW_FORM,
    payload: state
  };
}

export function setShowPlayer(index, nowIndex, personData) {
  return dispatch => {
    if (personData[nowIndex][5] != null && personData[nowIndex][0] !== "") {
      dispatch({
        type: SET_SHOW_PLAYER,
        showPlayer: index
      });
      dispatch(showForm(true));
    } else {
      dispatch(error("Pastikan Seluruh Form Sudah Terisi"));
    }
  };
}

export function savePlayer(personData, nowIndex) {
  return dispatch => {
    if (
      nowIndex === 0 ||
      (personData[nowIndex][5] != null && personData[nowIndex][0] !== "")
    ) {
      dispatch(showForm(false));
    } else {
      dispatch(error("Pastikan Seluruh Form Sudah Terisi"));
    }
    dispatch({
      type: SAVE_PLAYER
    });
  };
}

export function deletePlayer(nowPlayer, personData, index) {
  return dispatch => {
    const newNumberPlayer = Array.from(nowPlayer);
    newNumberPlayer.splice(index - 1, 1); // delete from array
    const newPersonData = Array.from(personData);
    newPersonData.splice(index, 1); // delete from array
    const newShowPlayer = newPersonData.length - 1;
    dispatch(showForm(false));
    dispatch({
      type: DELETE_PLAYER,
      personData: newPersonData,
      numberPlayer: newNumberPlayer,
      showPlayer: newShowPlayer
    });
  };
}

export function addPlayer(nowPlayer, personData, nowIndex) {
  return dispatch => {
    const numberPlayer = Array.from(nowPlayer);
    if (
      nowIndex === 0 ||
      (personData[nowIndex][5] != null && personData[nowIndex][0] !== "")
    ) {
      personData.push(["", "", "", "", null, null]);
      numberPlayer.push("aa");
      dispatch(showForm(true));
    } else {
      dispatch(error("Pastikan Seluruh Form Sudah Terisi"));
    }
    const showPlayer = numberPlayer.length;
    dispatch({
      type: ADD_PLAYER,
      payload: numberPlayer,
      showplayer: showPlayer
    });
  };
}

function uploadTeamImage(idTeam, teamName, teamImage, attempts = 0) {
  return dispatch => {
    storage
      .child(`futsal/${teamName}-${idTeam}/${teamName}-logo.jpg`)
      .put(teamImage)
      .then(function() {
        console.log("team image uploaded");
        dispatch(updateLoad());
        dispatch({
          type: SUBMIT
        });
      })
      .catch(e => {
        console.error(e);
        if (attempts < 5) {
          dispatch(uploadTeamImage(idTeam, teamName, teamImage, attempts + 1));
        } else {
          dispatch(loading(0));
          dispatch(error("Request Error, Gagal mengirim data"));
        }
      });
  };
}

function uploadTeam(idTeam, teamName, personData, attempts = 0) {
  return dispatch => {
    futsalFirestore
      .doc(`${teamName}-${idTeam}`)
      .set({
        nama: teamName,
        teamLogo: `futsal/${teamName}-${idTeam}/${teamName}-logo.jpg`,
        namaLengkap_manager: personData[0][0],
        kontak_manager: personData[0][1],
        email_manager: personData[0][2],
        telepon_manager: personData[0][3],
        foto_manager: `futsal/${teamName}-${idTeam}/manager-foto.jpg`
      })
      .then(() => {
        dispatch(updateLoad());
      })
      .catch(e => {
        console.error(e);
        if (attempts < 5) {
          dispatch(uploadTeam(idTeam, teamName, personData, attempts + 1));
        } else {
          dispatch(loading(0));
          dispatch(error("Request Error, Gagal mengirim data"));
        }
      });
  };
}

function uploadPlayer(
  idTeam,
  playerData,
  teamName,
  attempts = 0,
  fixIndex = -1
) {
  return dispatch => {
    playerData.forEach((x, index) => {
      futsalFirestore
        .doc(`${teamName}-${idTeam}`)
        .collection("player")
        .doc(`${x[0]}-${fixIndex >= 0 ? fixIndex : index}`)
        .set({
          namaLengkap: x[0],
          kontak: x[1],
          email: x[2],
          telepon: x[3],
          foto: `futsal/${teamName}-${idTeam}/${x[0]}-${
            fixIndex >= 0 ? fixIndex : index
          }-foto.jpg`
        })
        .then(() => {
          storage
            .child(
              `futsal/${teamName}-${idTeam}/${x[0]}-${
                fixIndex >= 0 ? fixIndex : index
              }-foto.jpg`
            )
            .put(x[5])
            .then(function() {
              console.log("player image uploaded");
              dispatch(updateLoad());
              dispatch(updateLoad());
              dispatch({
                type: SUBMIT
              });
            });
        })
        .catch(e => {
          console.error(e);
          if (attempts < 5) {
            const retryPlayerData = playerData.splice(index, 1);
            dispatch(
              uploadPlayer(
                idTeam,
                retryPlayerData,
                teamName,
                attempts + 1,
                fixIndex >= 0 ? fixIndex : index
              )
            );
          } else {
            dispatch(loading(0));
            dispatch(error("Request Error, Gagal mengirim data"));
          }
        });
    });
  };
}

export function submit(personData, teamImage, teamName) {
  let message;
  let check = true;
  if (personData.length < 10) {
    check = false;
    message = "Minimum Pemain harus 10";
  }
  personData.forEach((x, i) => {
    if ((i !== 0 && x[5] == null) || x[0] === "") {
      check = false;
      message = "Pastikan Seluruh Form Sudah Terisi";
    }
  });
  if (teamImage == null) {
    check = false;
    message = "Pastikan Anda Sudah Memasukan Logo Tim";
  }
  if (teamName == null) {
    check = false;
    message = "Pastikan Anda Sudah Memasukan Nama Tim Anda";
  }
  let teams;
  if (check) {
    return dispatch => {
      dispatch(loading(2 * personData.length));
      futsalFirestore.get().then(response => {
        teams = response.docs;
        console.log(teams.length);
        dispatch(uploadTeam(teams.length, teamName, personData));
        dispatch(uploadTeamImage(teams.length, teamName, teamImage));

        const playerData = personData.slice(1);
        dispatch(uploadPlayer(teams.length, playerData, teamName));
      });
    };
  }
  return dispatch => {
    dispatch(error(message));
  };
}
