import React from 'react';
import { Link } from 'react-router-dom';


import {
  Header,
  Icon,
  Divider
} from 'semantic-ui-react';


const HeaderComponent = () => (
  <Header as="h2" icon textAlign="center" color="purple">
    <Icon name="envelope" circular />
    <Header.Content>Message Me</Header.Content>
  </Header>
)

export default HeaderComponent;
