import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { colors } from "./ui";

import { Landing } from "./pages/Landing";
import ListProperties from "./pages/ListProperties";
import Property from "./pages/Property";
import Register from "./pages/Register";
import Signup from "./components/auth/Signup";
import UpdateProfile from "./pages/UpdateProfile";
import Login from "./components/auth/Login";
import MyProperties from "./pages/MyProperties";
import AddProperty from "./pages/AddProperty";

const Container = styled.div`
  background-color: ${colors.white};
`;

var App = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Route path="/addproperty" component={AddProperty} />
          <Route path="/myproperties" component={MyProperties}  />
          <Route path="/updateuser" component={UpdateProfile} />
          <Route path="/properties/:id" component={Property} />
          <Route exact path="/properties" component={ListProperties} />
          <Route path="/signup/landlord">
            <Signup role={1} />
          </Route>
          <Route path="/signup/seeker">
            <Signup role={0} />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
          {/* <Route path="/login" component={Login} /> */}
        </Container>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
