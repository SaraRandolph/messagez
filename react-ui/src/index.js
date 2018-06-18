import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.css';
import '../src/assets/header.css';
import {
  Container
} from 'semantic-ui-react';

ReactDOM.render((
  <Container>
    <div className="ui text container">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </Container>
  ), document.getElementById('root'));
registerServiceWorker();
