import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Counter from './components/counter/counter'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Navigation from './navbar/Navbar';
import Product from './components/shop/product'
import ToDo from './components/todo/Todo';
import './App.css';




function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={Counter} path="/counter" />
          <Route component={Shop} path="/shop" exact/>
          <Route component={Product} path="/shop/:id"/>
          <Route component={ToDo} path="/todo"/>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;