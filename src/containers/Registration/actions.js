/* eslint-disable prefer-destructuring */
import {
  DEFAULT_ACTION,
  SET_TEAM_IMAGE,
  SET_ID_CARD_IMAGE,
  ADD_PLAYER,
  SET_PERSON_DATA,
  SET_TEAM_NAME,
  SET_SHOW_PLAYER,
  SUBMIT
} from "./constants";

import { firestore, storage } from "../../config/firebaseConfig";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function setTeamName(e) {
  return {
    type: SET_TEAM_NAME,
    payload: e.target.value
  };
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

export function setShowPlayer(index) {
  return {
    type: SET_SHOW_PLAYER,
    showPlayer: index
  };
}

export function addPlayer(nowPlayer, personData) {
  const numberPlayer = Array.from(nowPlayer);
  personData.push(["", "", "", "", null]);
  numberPlayer.push("aa");
  const showPlayer = numberPlayer.length;
  console.log(numberPlayer);
  console.log(personData);
  console.log(showPlayer);
  return {
    type: ADD_PLAYER,
    payload: numberPlayer,
    showplayer: showPlayer
  };
}

export function submit(personData, teamImage, teamName) {
  let teams;
  firestore.get().then(response => {
    teams = response.docs;
    console.log(teams.length);
    firestore.doc(`${teamName}-${teams.length}`).set({
      nama: teamName,
      teamLogo: `futsal/${teamName}-${teams.length}/${teamName}-logo.jpg`,
      namaLengkap_manager: personData[0][0],
      kontak_manager: personData[0][1],
      email_manager: personData[0][2],
      telepon_manager: personData[0][3],
      idCard_manager: `futsal/${teamName}-${teams.length}/manager-idCard.jpg`
    });
    storage
      .child(`futsal/${teamName}-${teams.length}/${teamName}-logo.jpg`)
      .put(teamImage)
      .then(function() {
        console.log("team image uploaded");
      });
    storage
      .child(`futsal/${teamName}-${teams.length}/manager-idCard.jpg`)
      .put(personData[0][4])
      .then(function() {
        console.log("manager image uploaded");
      });

    const playerData = personData.slice(1);
    playerData.forEach((x, index) => {
      firestore
        .doc(`${teamName}-${teams.length}`)
        .collection("player")
        .doc(`${x[0]}-${index}`)
        .set({
          namaLengkap: x[0],
          kontak: x[1],
          email: x[2],
          telepon: x[3],
          idCard: `futsal/${teamName}-${teams.length}/${x[0]}-${index}-idCard.jpg`
        });
      storage
        .child(`futsal/${teamName}-${teams.length}/${x[0]}-${index}-idCard.jpg`)
        .put(x[4])
        .then(function() {
          console.log("player image uploaded");
        });
    });
  });
  return {
    type: SUBMIT
  };
}
