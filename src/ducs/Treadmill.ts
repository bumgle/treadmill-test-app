import processTreadmillData from "../services/processTreadmillData";
import { Dispatch } from "redux";
import { AppState } from "../ducs";

const TREADMILL_LOADED: string = "treadmill/fakeApi/load";

import { ITreadmill, ITreadmillData } from "../types";

type ILoadTreadmillAction = {
  type: string;
  data: ITreadmillData;
  metricSystem: boolean;
};

export const sendTreadMillDataAction = (
  dataTreadmill: ITreadmillData,
  metricSystem: boolean
) => ({
  type: TREADMILL_LOADED,
  data: dataTreadmill,
  metricSystem: metricSystem
});

const initialState: ITreadmill = {
  raw: {
    duration: 0,
    duration_countdown: 0,
    calories: 0,
    speed: 0,
    grade: 0,
    heart_rate: 0,
    pace: 0,
    distance: 0
  },
  processed: {
    duration: "",
    duration_countdown: "",
    calories: "",
    speed: "",
    grade: "",
    heart_rate: "",
    pace: "",
    distance: ""
  }
};

export default function reducer(
  state: ITreadmill = initialState,
  action: ILoadTreadmillAction
): ITreadmill {
  if (action.type === TREADMILL_LOADED) {
    return {
      raw: { ...action.data },
      processed: processTreadmillData(action.data, action.metricSystem)
    };
  }

  return state;
}
