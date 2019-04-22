import { Dispatch } from "redux";
import { AppState } from "../../ducs";
import { sendTreadMillDataAction } from "../../ducs/Treadmill";
import { ITreadmillData } from "../../types";
import generateTreadmillData from "../generateTreadmillData/";

interface getStateType {
  (): AppState;
}

export default function fakeSocket(
  dispatch: Dispatch,
  getState: getStateType,
  interval: number = 500
) {
  var intervalObj: number = 0;
  return () => {
    intervalObj = setInterval(() => {
      const state: AppState = getState();
      const treadmill: ITreadmillData = generateTreadmillData(
        state.treadmill.raw
      );
      if (treadmill.duration > 0 && treadmill.duration_countdown) {
        dispatch(sendTreadMillDataAction(treadmill, state.msystem));
      } else {
        clearInterval(intervalObj);
      }
    }, interval);
  };
}
