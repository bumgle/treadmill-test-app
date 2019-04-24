import * as React from 'react';

import './InfoCard.scss';

interface InfoCardType {
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardType> = ({ title, value }) => (
  <div className="icard">
    <div className="icard__title">{title}</div>
    <div className="icard__value">{value}</div>
  </div>
);

export default React.memo(InfoCard);
