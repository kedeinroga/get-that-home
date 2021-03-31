import styled from "@emotion/styled";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { colors } from "./ui";

import { Landing } from "./pages/Landing";
import Signup from "./components/users/FormNewUser";
import ListProperties from "./pages/ListProperties";
import Property from "./pages/Property";
import Register from "./pages/Register";

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
          <Route path="/register" component={Register} />
          {/* <Route path="/login" component={Login} /> */}
        </Container>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
