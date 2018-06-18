import React from 'react';
import { Link } from 'react-router-dom';


const Buttons = () => (
    <div className="ui two item menu column grid purple inverted">
      <a className="item"><Link to='/'>Home</Link></a>
      <a className="item"><Link to='/messages'>Message Logs</Link></a>
    </div>
)

export default Buttons;
