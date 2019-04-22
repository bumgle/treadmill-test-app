import { combineReducers } from "redux";

import treadMillReducer from "./Treadmill";
import metricsSystemReducer from "./MetricsSwitch";
import videoReducer from "./Video";

const rootReducer = combineReducers({
  treadmill: treadMillReducer,
  msystem: metricsSystemReducer,
  video: videoReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
