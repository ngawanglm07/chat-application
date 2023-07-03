import { Switch, BrowserRouter } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import Sign from './pages/Sign';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signin">
        <Sign/>
        </PublicRoute>
        <PrivateRoute  path="/">
        <Home/>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
