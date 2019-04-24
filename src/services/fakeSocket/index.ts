import { Dispatch } from 'redux';
import { AppState } from '../../ducks';
import { sendTreadMillDataAction } from '../../ducks/Treadmill';
import { TreadmillDataType } from '../../types';
import generateTreadmillData from '../generateTreadmillData';

interface GetStateType {
  (): AppState;
}

export default function fakeSocket(
  dispatch: Dispatch,
  getState: GetStateType,
  interval: number = 500
) {
  let intervalObj = 0;
  return () => {
    intervalObj = setInterval(() => {
      const state: AppState = getState();
      const treadmill: TreadmillDataType = generateTreadmillData(
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
