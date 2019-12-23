import {
  DEFAULT_ACTION,
  SET_TEAM_IMAGE,
  SET_ID_CARD_IMAGE,
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_PERSON_DATA,
  SET_TEAM_NAME,
  SET_SHOW_PLAYER,
  SUBMIT
} from "./constants";

const initialState = {
  teamImage: null,
  teamName: "",
  personData: [["", "", "", "", null]],
  numberPlayer: [],
  a: "",
  showPlayer: 0
};

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_TEAM_NAME:
      return { ...state, teamName: action.payload };
    case SET_TEAM_IMAGE:
      return { ...state, teamImage: action.payload };
    case SET_ID_CARD_IMAGE:
      return { ...state, personData: action.payload };
    case SET_PERSON_DATA:
      return { ...state, personData: action.payload };
    case SET_SHOW_PLAYER:
      return { ...state, showPlayer: action.showPlayer };
    case DELETE_PLAYER:
      return {
        ...state,
        numberPlayer: action.numberPlayer,
        personData: action.personData,
        showPlayer: action.showPlayer
      };
    case ADD_PLAYER:
      return {
        ...state,
        numberPlayer: action.payload,
        showPlayer: action.showplayer
      };
    case SUBMIT:
      return { ...state };
    default:
      return state;
  }
}

export default registrationReducer;
