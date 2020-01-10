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

const initialState = {
  teamImage: null,
  teamName: "",
  personData: [["", "", "", "", null, null]],
  numberPlayer: [],
  showPlayer: 0,
  showForm: false,
  loading: false,
  loadNow: 0,
  loadBase: 0,
  done: false,
  alert: null
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
    case SET_SELF_IMAGE:
      return { ...state, personData: action.payload };
    case SET_PERSON_DATA:
      return { ...state, personData: action.payload };
    case SET_SHOW_PLAYER:
      return { ...state, showPlayer: action.showPlayer };
    case SAVE_PLAYER:
      return { ...state };
    case SHOW_FORM:
      return { ...state, showForm: action.payload };
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
    case LOADING:
      return {
        ...state,
        loading: action.loadBase !== 0,
        loadNow: 0,
        loadBase: action.loadBase,
        done: false
      };
    case UPDATE_LOADING:
      return {
        ...state,
        loadNow: state.loadNow + 1,
        loading:
          !(state.loadNow + 1 === state.loadBase) && state.loadBase !== 0,
        loadBase: state.loadNow + 1 === state.loadBase ? 0 : state.loadBase,
        done: state.loadNow + 1 === state.loadBase
      };
    case ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
}

export default registrationReducer;
