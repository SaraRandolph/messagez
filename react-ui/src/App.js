import React from 'react';
import { Route, Link } from 'react-router-dom'
import Main from '../src/components/main';
import HeaderComponent from '../src/components/header';
import Buttons from "../src/components/buttons";
import './index.css';

import {
  Divider
} from 'semantic-ui-react';

const App = () => (
  <div className="ui icon center aligned header">
      <HeaderComponent />
      <div class="ui hidden section divider"></div>
      <Buttons />
      <div class="ui hidden section divider"></div>
      <Main />
  </div>
)

export default App;

