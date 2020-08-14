import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import ShopStore from "./component/ShopStore";
import Order from "./component/Order";
import AddItem from "./component/AddItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className={'nav'}>
          <NavLink exact to={'/'} className={'nav_link'} activeClassName={'link_selected'}>商城</NavLink>
          <NavLink exact to={'/order'} className={'nav_link'} activeClassName={'link_selected'}>订单</NavLink>
          <NavLink exact to={'/add-item'} className={'nav_link'} activeClassName={'link_selected'}>添加商品</NavLink>
        </nav>

        <Route exact path='/' component={ShopStore}/>
        <Route exact path='/order' component={Order}/>
        <Route exact path='/timer' component={AddItem}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
