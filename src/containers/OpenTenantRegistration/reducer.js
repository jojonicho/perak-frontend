// import { fromJS } from 'immutable';
import { DEFAULT_ACTION, DONE, SUBMIT, RESET } from "./constants";

const initialState = {
  loading: false,
  done: false
};

function openTenantRegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case DONE:
      return { ...state, done: true };
    case SUBMIT:
      return { ...state, loading: true };
    case RESET:
      return { ...state, done: false, loading: false };
    default:
      return state;
  }
}

export default openTenantRegistrationReducer;
