import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/addproperty" component={AddProperty} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
