import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProperty from "./pages/AddProperty";
import styled from "@emotion/styled";

// import { Landing } from "./pages/Landing";
// import { Login } from "./pages/Login";
import Home from "./pages/Home";

const Container = styled.div`
  background-color: red;
`;

var App = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route path="/addproperty" component={AddProperty} />
          <Route path="/" component={Home} />
          {/* <Route path="/login" component={Login} /> */}
        </Container>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
