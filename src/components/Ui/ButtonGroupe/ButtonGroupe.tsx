import * as React from "react";

interface ButtonGroupeProps {
  children: React.ReactNode;
}

import "./ButtonGroupe.scss";

const ButtonGroupe: React.FC<ButtonGroupeProps> = props => {
  return <div className="button-group">{props.children}</div>;
};

export default ButtonGroupe;
