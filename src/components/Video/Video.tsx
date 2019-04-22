import * as React from "react";

import "./Video.scss";

interface VideoTypes {
  source: string;
  current: number;
  setVideoCurrent: (current: number) => void;
}

export default class Video extends React.Component<VideoTypes> {
  private videoRef = React.createRef<HTMLVideoElement>();

  onVideoMetadataLoaded = (event: any) => {
    const video: HTMLVideoElement = event.target;
    const { current } = this.props;

    if (current) {
      video.currentTime = current;
    }
    video.play();
  };

  bindEventListeners = () => {
    const video: HTMLVideoElement = this.videoRef.current;
    video.addEventListener("loadedmetadata", this.onVideoMetadataLoaded);
  };

  unBindEventListeners = () => {
    const video: HTMLVideoElement = this.videoRef.current;
    video.removeEventListener("loadedmetadata", this.onVideoMetadataLoaded);
  };

  componentDidMount() {
    this.bindEventListeners();
  }

  componentDidUpdate() {
    this.bindEventListeners();
  }

  componentWillUnmount() {
    this.unBindEventListeners();
    this.props.setVideoCurrent(this.videoRef.current.currentTime);
  }

  render() {
    const { source } = this.props;
    return (
      <div className="video">
        <video ref={this.videoRef} key={source} loop>
          <source src={source} type="video/mp4" />
        </video>
      </div>
    );
  }
}
