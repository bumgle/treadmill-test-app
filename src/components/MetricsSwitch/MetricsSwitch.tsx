import * as React from "react";

import "./MetricsSwitch.scss";

interface MetricsSwitchTypes {
  msystem: boolean;
  onChange: (event: boolean) => void;
}

export default class MetricsSwitch extends React.PureComponent<
  MetricsSwitchTypes
> {
  onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onChange(event.target.checked);
  };

  render() {
    const { msystem } = this.props;
    return (
      <form className="mswitch">
        <label htmlFor="ms-input">
          <input
            id="ms-input"
            type="checkbox"
            checked={msystem || false}
            onChange={this.onCheckboxChange}
          />
          Imperial metric system
        </label>
      </form>
    );
  }
}
