import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NewRoom } from './Pages/NewRoom';
import { Home } from "./Pages/Home"
import { Room } from './Pages/Room';

import { AthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AthContextProvider>
    </BrowserRouter>
  );
}

export default App;
