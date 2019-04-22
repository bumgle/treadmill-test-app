import * as React from "react";

import Video from "../../components/Video";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../ducs";
import { setVideoCurrent } from "../../ducs/Video";
import { VideoStoreType } from "../../types";

type EntertainmentProps = {
  video: VideoStoreType;
  setVideoCurrent: (current: number) => void;
};

const Entertainment: React.FC<EntertainmentProps> = props => {
  return (
    <>
      <Video {...props.video} setVideoCurrent={props.setVideoCurrent} />
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  video: state.video
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setVideoCurrent: (current: number) => dispatch(setVideoCurrent(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entertainment);
