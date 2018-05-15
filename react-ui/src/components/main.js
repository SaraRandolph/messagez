import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MessageBoard from '../components/messageBoard';
import MessageLog from '../components/messageLog'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MessageBoard}/>
      <Route path='/messages' component={MessageLog}/>
    </Switch>
  </main>
)

export default Main;

