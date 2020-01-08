// import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SET_PERSON_DATA } from "./constants";

const initialState = {
  dota: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    personData: [["", "", "", ""]]
  },
  csgo: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    personData: [["", "", "", ""]]
  },
  mlbb: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    personData: [["", "", "", ""]]
  },
  codenames: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    personData: [["", "", "", ""]]
  },
  catur: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    personData: [["", "", "", ""]]
  },
  fifa: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    personData: [["", "", "", ""]]
  },
  ssbu: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
    personData: [["", "", "", ""]]
  },
  mariokart: {
    namaTim: "",
    logoTim: null,
    numberPlayer: 1,
    showPlayer: 0,
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
    default:
      return state;
  }
}

export default gameRegistrationReducer;
