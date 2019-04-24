import * as React from 'react';

import ButtonGroupe from '../Ui/ButtonGroupe';
import NavButton from '../Ui/NavButton';

const NavBar = () => (
  <ButtonGroupe>
    <NavButton path="/" title="Dashboard" />
    <NavButton path="/entertainment-select" title="Entertainment Select" />
    <NavButton path="/entertainment" title="Entertainment" />
  </ButtonGroupe>
);

export default NavBar;
