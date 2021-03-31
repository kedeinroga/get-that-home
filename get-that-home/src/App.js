import styled from "@emotion/styled";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { colors } from "./ui";

import { Landing } from "./pages/Landing";
import Signup from "./pages/SignUp";
import ListProperties from "./pages/ListProperties";
import Property from "./pages/Property";

const Container = styled.div`
  background-color: ${colors.white};
`;

var App = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route path="/properties/:id" component={Property} />
          <Route exact path="/properties" component={ListProperties} />
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/login" component={Login} /> */}
        </Container>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
