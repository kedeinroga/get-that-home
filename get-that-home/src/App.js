import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "./ui";

import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import ListProperties from "./pages/ListProperties";
const Container = styled.div`
  background-color: ${colors.white};
`;

var App = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route path="/Login" component={Login} />
          <Route path="/" component={Landing} />
          <Route path="/listproperties" component={ListProperties} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/login" component={Login} /> */}
        </Container>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
