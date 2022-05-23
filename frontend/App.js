import { Switch, Route } from "react-router-dom";
import { userView } from './components/userView';


function App() {
  return (
    <div className="App">
      <Switch>
          
          <Route path="/:id" component={userView} />
        </Switch>
    </div>
  );
}

export default App;
