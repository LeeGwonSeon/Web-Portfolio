import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    
      <Router>
        <Switch>
          <Route path="/">
            <div>
              <h1>Hello This is my</h1>
            </div>
            <Home />
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
