import { database } from "../../config/firebaseConfig";
import { DEFAULT_ACTION, SUBMIT, DONE, RESET } from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function realSubmit(namaPanggung, jenisPenampilan, contact, personils) {
  return dispatch => {
    const dateTime = new Date().valueOf();
    database
      .ref(`bir/${namaPanggung}-${dateTime}`)
      .set({
        tanggalDaftar: Date(dateTime),
        namaPanggung,
        jenisPenampilan,
        contact,
        personils
      })
      .then(() => {
        dispatch({ type: DONE });
      });
    // console.log("oke")
    dispatch({ type: SUBMIT });
  };
}

export function resetRedux() {
  return { type: RESET };
}
