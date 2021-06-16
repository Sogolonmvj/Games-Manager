import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminLayout from './layouts/admin';

import './style.scss';

function App() {
  return (

      <Router>
        <AdminLayout>
          <Switch>
            <Route path="/game/edit/:id">
              <h1>Game Edit</h1>
            </Route>
            <Route path="/game/create">
              <h1>Game Create</h1>
            </Route>
            <Route path="/game">
              <h1>Game List</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game List</Link></li>
                <li><Link to="/game/create">Game Create</Link></li>
                <li><Link to="/game/edit/gfgffgdjgdhd">Game Edit</Link></li>
              </ul>
            </Route>
          </Switch>
        </AdminLayout>
      </Router>
  );
}

export default App;
