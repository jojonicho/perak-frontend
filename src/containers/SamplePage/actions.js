import { DEFAULT_ACTION, GET_AKSI, KETIK } from "./constants";

export function defaultAction() {
  return { type: DEFAULT_ACTION };
}

export function aksi() {
  console.log("agfiuwebfauwgdsblxj");
  return { type: GET_AKSI, payload: "udah ganti" };
}

export function ketik(ketikan) {
  return { type: KETIK, payload: ketikan };
}
