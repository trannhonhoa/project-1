import Header from "./containers/Header";
import ProductList from './containers/ProductList'
import ProductDetail from './containers/ProductDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productID" component={ProductDetail} />
          <Route>Not found 404</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
