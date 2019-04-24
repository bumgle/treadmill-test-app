import { ActionWithData } from '../types';

const MSYSTEM_CHANGE = '/treadmill/MetricsSwitch/change';

type MSChangeAction = ActionWithData<boolean>;

export function changeMetricsSystem(data: boolean): MSChangeAction {
  return {
    type: MSYSTEM_CHANGE,
    data
  };
}

export default function reducer(
  state: boolean = false,
  action: MSChangeAction
): boolean {
  if (action.type === MSYSTEM_CHANGE) {
    return action.data;
  }

  return state;
}
