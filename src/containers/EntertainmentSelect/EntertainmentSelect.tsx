import * as React from "react";

import Video from "../../components/Video";
import VideoSelector from "../../components/VideoSelector";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../ducs";
import { setVideoCurrent, setVideoSource } from "../../ducs/Video";
import { VideoStoreType } from "../../types";

type EntertainmentSelectProps = {
  video: VideoStoreType;
  setVideoSource: (source: string) => void;
  setVideoCurrent: (current: number) => void;
};

const EntertainmentSelect: React.FC<EntertainmentSelectProps> = (
  props: EntertainmentSelectProps
) => {
  return (
    <>
      <VideoSelector
        source={props.video.source}
        setVideoSource={props.setVideoSource}
      />
      <Link to="/entertainment">
        <Video {...props.video} setVideoCurrent={props.setVideoCurrent} />
      </Link>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  video: state.video
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setVideoCurrent: (current: number) => dispatch(setVideoCurrent(current)),
  setVideoSource: (source: string) => dispatch(setVideoSource(source))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntertainmentSelect);
