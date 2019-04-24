import processTreadmillData from '../services/processTreadmillData'

import { TreadmillType, TreadmillDataType } from '../types'

const TREADMILL_LOADED = 'treadmill/fakeApi/load'

type ILoadTreadmillAction = {
  type: string
  data: TreadmillDataType
  metricSystem: boolean
}

export const sendTreadMillDataAction = (
  dataTreadmill: TreadmillDataType,
  metricSystem: boolean
) => ({
  type: TREADMILL_LOADED,
  data: dataTreadmill,
  metricSystem
})

const initialState: TreadmillType = {
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
    duration: '',
    duration_countdown: '',
    calories: '',
    speed: '',
    grade: '',
    heart_rate: '',
    pace: '',
    distance: ''
  }
}

export default function reducer(
  state: TreadmillType = initialState,
  action: ILoadTreadmillAction
): TreadmillType {
  if (action.type === TREADMILL_LOADED) {
    return {
      raw: { ...action.data },
      processed: processTreadmillData(action.data, action.metricSystem)
    }
  }

  return state
}
