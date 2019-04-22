import * as React from "react";

import "./InfoCard.scss";

interface InfoCardType {
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardType> = props => (
  <div className="icard">
    <div className="icard__title">{props.title}</div>
    <div className="icard__value">{props.value}</div>
  </div>
);

export default React.memo(InfoCard);
