import * as React from "react";

import "./VideoSelector.scss";

type VideoSelectorTypes = {
  source: string;
  setVideoSource: (source: string) => void;
};

export default class VideoSelector extends React.PureComponent<
  VideoSelectorTypes
> {
  onValueChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.props.setVideoSource(event.target.value);
  };

  render() {
    return (
      <select
        className="video-selector"
        value={this.props.source}
        onChange={this.onValueChange}
      >
        <option value="" disabled hidden>
          Select video source
        </option>
        <option value="http://media.w3.org/2010/05/sintel/trailer.mp4">
          Sintel
        </option>
        <option value="http://media.w3.org/2010/05/bunny/trailer.mp4">
          Big Buck Bunny
        </option>
        <option value="http://media.w3.org/2010/05/video/movie_90.mp4">
          Movie 90
        </option>
      </select>
    );
  }
}
