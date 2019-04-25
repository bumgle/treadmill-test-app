import * as React from 'react';

import './Video.scss';

interface VideoTypes {
  source: string;
  current: number;
  setVideoCurrent: (current: number) => void;
}

export default class Video extends React.PureComponent<VideoTypes, {}> {
  private videoRef = React.createRef<HTMLVideoElement>();

  public componentDidMount() {
    this.bindEventListeners();
  }

  public componentDidUpdate() {
    this.bindEventListeners();
  }

  public componentWillUnmount() {
    const { setVideoCurrent } = this.props;
    this.unBindEventListeners();
    const videoNode = this.videoRef.current;
    const time = videoNode.currentTime;

    if (time) {
      setVideoCurrent(time);
      videoNode.addEventListener('timeupdate', (event: any) => {
        setVideoCurrent(event.target.currentTime);
      });
    }
  }

  private onVideoMetadataLoaded = (event: any) => {
    const video: HTMLVideoElement = event.target;
    const { current } = this.props;

    if (current) {
      video.currentTime = current;
    }
    video.play();
  };

  private bindEventListeners = () => {
    const video: HTMLVideoElement = this.videoRef.current;
    video.addEventListener('loadedmetadata', this.onVideoMetadataLoaded);
  };

  private unBindEventListeners = () => {
    const video: HTMLVideoElement = this.videoRef.current;
    video.removeEventListener('loadedmetadata', this.onVideoMetadataLoaded);
  };

  public render() {
    const { source } = this.props;
    return (
      <video ref={this.videoRef} key={source} loop>
        <source src={source} type="video/mp4" />
      </video>
    );
  }
}
