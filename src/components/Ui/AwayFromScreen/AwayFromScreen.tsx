import * as React from "react";

import "./AwayFromScreen.scss";

type AwayFromScreen = {
  children: React.ReactNode;
};

const AwayFromScreen: React.FC<AwayFromScreen> = props => (
  <div className="away-from-screen">{props.children}</div>
);

export default AwayFromScreen;
