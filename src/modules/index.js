/* eslint-disable */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import globalReducer from "./../globalReducer";
import samplePageReducer from "../containers/SamplePage/reducer";
import registrationReducer from "../containers/Registration/reducer";

import landingPageReducer from "../containers/LandingPage/reducer";
import gameRegistrationReducer from "../containers/GameRegistration/reducer";
//import futsalScorePageReducer from "../containers/FutsalScorePage/reducer";

import birBintangRegistrationReducer from "../containers/BirBintangRegistration/reducer";
import openTenantRegistrationReducer from "../containers/OpenTenantRegistration/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    samplePage: samplePageReducer,
    registration: registrationReducer,
    landingPage: landingPageReducer,
    gameRegistration: gameRegistrationReducer,
    //futsalScorePage: futsalScorePageReducer
    openTenantRegistration: openTenantRegistrationReducer,
    birBintangRegistration: birBintangRegistrationReducer
  });
