import { DEFAULT_ACTION, GET_AKSI, KETIK } from "./constants";

const initialState = {
  data: "inital",
  ketik: null
};

function samplePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_AKSI:
      return { ...state, data: action.payload };
    case KETIK:
      return { ...state, ketik: action.payload };
    default:
      return state;
  }
}

export default samplePageReducer;
