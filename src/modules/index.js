/* eslint-disable */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import globalReducer from "./../globalReducer";
import samplePageReducer from "../containers/SamplePage/reducer";
import registrationReducer from "../containers/Registration/reducer";

import landingPageReducer from "../containers/LandingPage/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    samplePage: samplePageReducer,
    registration: registrationReducer,
    landingPage: landingPageReducer
  });
