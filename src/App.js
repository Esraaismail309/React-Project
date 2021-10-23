import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Navigation from './components/navbar/Navbar';
import Counter from './components/counter/counter'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Product from './components/shop/product'
import ToDo from './components/todo/Todo';
import Login from './components/login/Login';
import Register from './components/login/Register';
//style
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
          <Route component={Login} path="/login"/>
          <Route component={Register} path="/register"/>



        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;