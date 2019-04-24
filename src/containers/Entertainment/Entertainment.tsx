import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Video from '../../components/Video';
import { AppState } from '../../ducks';
import { setVideoCurrent } from '../../ducks/Video';
import { VideoStoreType } from '../../types';

type EntertainmentProps = {
  video: VideoStoreType;
  setVideoCur: (current: number) => void;
};

const Entertainment: React.FC<EntertainmentProps> = props => {
  const { video, setVideoCur } = props;
  return (
    <>
      <Video {...video} setVideoCurrent={setVideoCur} />
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  video: state.video
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setVideoCur: (current: number) => dispatch(setVideoCurrent(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entertainment);
