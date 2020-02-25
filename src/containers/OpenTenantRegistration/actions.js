import { DEFAULT_ACTION, DONE, SUBMIT, RESET } from "./constants";
import { database } from "../../config/firebaseConfig";

export function realSubmit(nama, kontak, jenisJualan, deskripsi, setuju) {
  return dispatch => {
    const dateTime = new Date().valueOf();
    database
      .ref(`bazar/${nama}-${dateTime}`)
      .set({
        tanggalDaftar: Date(dateTime),
        nama,
        kontak,
        jenisJualan,
        deskripsi,
        setuju
      })
      .then(() => {
        dispatch({ type: DONE });
      });
    dispatch({ type: SUBMIT });
  };
}

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function resetAction() {
  return { type: RESET };
}
