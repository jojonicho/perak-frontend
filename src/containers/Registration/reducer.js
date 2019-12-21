import {
  DEFAULT_ACTION,
  SET_TEAM_IMAGE,
  SET_ID_CARD_IMAGE,
  ADD_PLAYER,
  SET_PERSON_DATA
} from "./constants";

const initialState = {
  teamImage: null,
  personData: [["", "", "", "", null]],
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
      return { ...state, personData: action.payload };
    case SET_PERSON_DATA:
      return { ...state, personData: action.payload };
    case ADD_PLAYER:
      return { ...state, numberPlayer: action.payload, a: action.a };
    default:
      return state;
  }
}

export default registrationReducer;
