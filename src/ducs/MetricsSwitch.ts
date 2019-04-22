const MSYSTEM_CHANGE = "/treadmill/MetricsSwitch/change";

import { ActionWithData } from "../types";

type MSChangeAction = ActionWithData<boolean>;

export function changeMetricsSystem(data: boolean): MSChangeAction {
  return {
    type: MSYSTEM_CHANGE,
    data: data
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
