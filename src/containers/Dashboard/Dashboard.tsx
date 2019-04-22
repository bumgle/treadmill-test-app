import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import MetricsSwitch from "../../components/MetricsSwitch";
import InfoCard from "../../components/Ui/InfoCard";
import Video from "../../components/Video";
import AwayFromScreen from "../../components/Ui/AwayFromScreen";
import { AppState } from "../../ducs";
import { ITreadmillProcessed } from "../../types";
import { changeMetricsSystem } from "../../ducs/MetricsSwitch";
import { setVideoCurrent } from "../../ducs/Video";
import { VideoStoreType } from "../../types";

interface DasbordType {
  msystem: boolean;
  treadmill: ITreadmillProcessed;
  video: VideoStoreType;
  toggleMetricsSystem: (value: boolean) => void;
  setVideoCurrent: (current: number) => void;
}

const Dashboard: React.FC<DasbordType> = props => {
  const {
    msystem,
    toggleMetricsSystem,
    treadmill,
    video,
    setVideoCurrent
  } = props;
  return (
    <>
      <MetricsSwitch msystem={msystem} onChange={toggleMetricsSystem} />
      <div className="icards-list">
        <InfoCard title="Duration" value={treadmill.duration} />
        <InfoCard
          title="Duration countdown"
          value={treadmill.duration_countdown}
        />
        <InfoCard title="Calories" value={treadmill.calories} />
        <InfoCard title="Speed" value={treadmill.speed} />
        <InfoCard title="grade" value={treadmill.grade} />
        <InfoCard title="Heart Rate" value={treadmill.heart_rate} />
        <InfoCard title="Pace" value={treadmill.pace} />
        <InfoCard title="Distance" value={treadmill.distance} />
      </div>
      <AwayFromScreen>
        <Video {...video} setVideoCurrent={setVideoCurrent} />
      </AwayFromScreen>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  msystem: state.msystem,
  treadmill: state.treadmill.processed,
  video: state.video
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleMetricsSystem: (value: boolean) => dispatch(changeMetricsSystem(value)),
  setVideoCurrent: (current: number) => dispatch(setVideoCurrent(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
