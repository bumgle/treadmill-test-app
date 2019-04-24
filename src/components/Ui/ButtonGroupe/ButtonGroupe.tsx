import * as React from 'react'

import './ButtonGroupe.scss'

interface ButtonGroupeProps {
  children: React.ReactNode
}

const ButtonGroupe: React.FC<ButtonGroupeProps> = ({ children }) => {
  return <div className="button-group">{children}</div>
}

export default ButtonGroupe
