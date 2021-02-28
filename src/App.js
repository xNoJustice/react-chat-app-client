import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainProvider } from "./mainContext";
import { UsersProvider } from "./usersContext";
import { SocketProvider } from "./socketContext";
import Login from "./components/Login";
import Chat from "./components/Chat";

const App = () => (
  <MainProvider>
    <UsersProvider>
      <SocketProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </Router>
      </SocketProvider>
    </UsersProvider>
  </MainProvider>
);

export default App;
