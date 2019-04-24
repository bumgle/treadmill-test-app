import { TreadmillDataType } from '../../types';

const CALORIES_BURN: number = 0.1875 / 2;
const DURATION_ICREASE = 0.5;
const DURATION: number = 30 * 60;
const SPEED = 9;
const SPEED_PER_SECOND: number = (SPEED * 1000) / (60 * 60);

export default function generateTreadmillData(
  data: TreadmillDataType
): TreadmillDataType {
  const newDuration = data.duration + DURATION_ICREASE;
  const newDistance = newDuration * SPEED_PER_SECOND;

  return {
    duration: newDuration, // seconds
    duration_countdown: DURATION - newDuration, // seconds
    calories: data.calories + CALORIES_BURN, // colories
    speed: SPEED, // km/h
    grade: 0, // %
    heart_rate: 127, // bpm
    pace: (newDuration / newDistance) * 16.667,
    distance: newDistance / 1000 // meters
  };
}
