// import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SUBMIT, DONE, RESET } from "./constants";

const initialState = {
  done: false,
  loading: false
};

function birBintangRegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SUBMIT:
      return { ...state, loading: true };
    case DONE:
      return { ...state, done: true, loading: false };
    case RESET:
      return { ...state, done: false, loading: false, loadBase: 0, loadNow: 0 };
    default:
      return state;
  }
}

export default birBintangRegistrationReducer;
