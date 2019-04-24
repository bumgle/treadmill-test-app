import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import MetricsSwitch from '../../components/MetricsSwitch';
import InfoCard from '../../components/Ui/InfoCard';
import Video from '../../components/Video';
import AwayFromScreen from '../../components/Ui/AwayFromScreen';
import { AppState } from '../../ducks';
import { TreadmillProcessedType, VideoStoreType } from '../../types';
import { changeMetricsSystem } from '../../ducks/MetricsSwitch';
import { setVideoCurrent } from '../../ducks/Video';

interface DasbordType {
  msystem: boolean;
  treadmill: TreadmillProcessedType;
  video: VideoStoreType;
  toggleMetricsSystem: (value: boolean) => void;
  setVideoCur: (current: number) => void;
}

const Dashboard: React.FC<DasbordType> = props => {
  const { msystem, toggleMetricsSystem, treadmill, video, setVideoCur } = props;
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
        <Video {...video} setVideoCurrent={setVideoCur} />
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
  setVideoCur: (current: number) => dispatch(setVideoCurrent(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
