import { ITreadmillData, ITreadmillProcessed } from "../../types";

const toHHMMSS = (secs: number): string => {
  const hours = Math.floor(secs / 3600) % 24;
  const minutes = Math.floor(secs / 60) % 60;
  const seconds = secs % 60;
  return [hours, minutes, seconds]
    .map(v => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};

const MSDictianary = [
  {
    distance: "Km",
    speed: "Km/h",
    speed_unit_length: 1000,
    speed_unit_koef: 1,
    pace: "min/Km"
  },
  {
    distance: "Mi",
    speed: "Mi/h",
    speed_unit_length: 1609.344,
    speed_unit_koef: 0.621371,
    pace: "min/Mi"
  }
];

export default function processTreadmillData(
  data: ITreadmillData,
  metrickSystem: boolean
): ITreadmillProcessed {
  const MSSystem = MSDictianary[Number(metrickSystem)];

  return {
    duration: toHHMMSS(Math.floor(data.duration)),
    duration_countdown: toHHMMSS(Math.floor(data.duration_countdown)),
    calories: `${Math.floor(data.calories).toString()} cal`,
    speed: `${(data.speed * MSSystem.speed_unit_koef).toFixed(1)} ${
      MSSystem.speed
    }`, // speed
    grade: `${data.grade.toFixed(1)} %`,
    heart_rate: `${Math.floor(data.heart_rate).toString()} bpm`,
    pace: `${toHHMMSS(
      Math.floor(
        (data.duration / data.distance) * (MSSystem.speed_unit_length / 1000)
      )
    )} ${MSSystem.pace}`,
    distance: `${(data.distance * MSSystem.speed_unit_koef).toFixed(2)} ${
      MSSystem.distance
    }`
  };
}
