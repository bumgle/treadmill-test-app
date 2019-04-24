import * as React from 'react';

import './AwayFromScreen.scss';

type AwayFromScreen = {
  children: React.ReactNode;
};

const AwayFromScreen: React.FC<AwayFromScreen> = ({ children }) => (
  <div className="away-from-screen">{children}</div>
);

export default AwayFromScreen;
