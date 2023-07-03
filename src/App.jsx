import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import Sign from './pages/Sign';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">
        <Sign/>
        </Route>

        <PrivateRoute  path="/">
        <Home/>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
