import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import NotFound from './NotFound'
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
