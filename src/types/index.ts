/*** COMMON ***/

export interface ITreadmillData {
  duration: number;
  duration_countdown: number;
  calories: number;
  speed: number;
  grade: number;
  heart_rate: number;
  pace: number;
  distance: number;
}

export interface ITreadmillProcessed {
  duration: string;
  duration_countdown: string;
  calories: string;
  speed: string;
  grade: string;
  heart_rate: string;
  pace: string;
  distance: string;
}

export interface ITreadmill {
  raw: ITreadmillData;
  processed: ITreadmillProcessed;
}

export interface VideoStoreType {
  source: string;
  current: number;
}

/*** REDUX ***/
export interface Action {
  type: string;
}

export interface ActionWithData<T> extends Action {
  data: T;
}
