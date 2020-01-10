// import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_PERSON_DATA,
  ADD_PLAYER,
  LOADING,
  UPDATE_LOADING,
  ALERT,
  DELETE_PLAYER,
  SET_SHOW_PLAYER,
  SET_TEAM_NAME,
  SAVE_PLAYER,
  SHOW_FORM
} from "./constants";

const initialState = {
  alert: null,
  done: false,
  loading: false,
  loadNow: 0,
  loadBase: 0,
  dota: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  },
  csgo: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  },
  mlbb: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  },
  codenames: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  },
  catur: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  },
  fifa: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  },
  ssbu: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  },
  mariokart: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    showForm: true,
    personData: [["", "", "", ""]]
  }
};

function gameRegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_PERSON_DATA: {
      const { idGame } = action;
      return {
        ...state,
        [idGame]: { ...state[idGame], personData: action.payload }
      };
    }
    case ADD_PLAYER: {
      const { idGame } = action;
      return {
        ...state,
        [idGame]: {
          ...state[idGame],
          numberPlayer: action.payload.length,
          showPlayer: action.payload.length - 1,
          personData: action.payload
        }
      };
    }
    case DELETE_PLAYER: {
      const { idGame } = action;
      return {
        ...state,
        [idGame]: {
          ...state[idGame],
          numberPlayer: action.payload.length,
          personData: action.payload,
          showPlayer: action.payload.length - 1
        }
      };
    }
    case SET_SHOW_PLAYER: {
      const { idGame } = action;
      return {
        ...state,
        [idGame]: {
          ...state[idGame],
          showPlayer: action.showPlayer
        }
      };
    }
    case SHOW_FORM: {
      const { idGame } = action;
      return {
        ...state,
        [idGame]: {
          ...state[idGame],
          showForm: action.payload
        }
      };
    }
    case SET_TEAM_NAME: {
      const { idGame } = action;
      return {
        ...state,
        [idGame]: {
          ...state[idGame],
          namaTim: action.payload
        }
      };
    }
    case SAVE_PLAYER:
      return { ...state };
    case LOADING:
      return {
        ...state,
        loading: !state.loading,
        loadNow: 0,
        loadBase: action.loadBase,
        done: false
      };
    case UPDATE_LOADING:
      return {
        ...state,
        loadNow: state.loadNow + 1,
        loading: !(state.loadNow + 1 === state.loadBase),
        loadBase: state.loadNow + 1 === state.loadBase ? 0 : state.loadBase,
        done: state.loadNow + 1 === state.loadBase
      };
    case ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
}

export default gameRegistrationReducer;
