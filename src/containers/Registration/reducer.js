import {
  DEFAULT_ACTION,
  SET_TEAM_IMAGE,
  SET_ID_CARD_IMAGE,
  ADD_PLAYER
} from "./constants";

const initialState = {
  teamImage: null,
  idCardImage: null,
  numberPlayer: [],
  a: ""
};

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_TEAM_IMAGE:
      return { ...state, teamImage: action.payload };
    case SET_ID_CARD_IMAGE:
      return { ...state, idCardImage: action.payload };
    case ADD_PLAYER:
      return { ...state, numberPlayer: action.payload, a: action.a };
    default:
      return state;
  }
}

export default registrationReducer;
