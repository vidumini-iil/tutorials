import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/edit/:id" component={EditUser} />
            <Route path="/add" component={AddUser} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
