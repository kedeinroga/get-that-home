import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "./ui";

import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";
const Container = styled.div`
  background-color: ${colors.white};
`;

var App = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route path="/addproperty" component={AddProperty} />
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={Login} /> */}
        </Container>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
