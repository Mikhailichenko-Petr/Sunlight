
import {Route,Routes} from "react-router-dom";
import style from "./app.module.css"
import React from "react"
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from "./main/main";
import { Exchange } from "./Exchange_and_return/Exchange";
import { Order_status } from "./Order_status/Order_status";
import { Shops } from "./header/Shops/Shops";
import { Delivery } from "./header/Delivery/Delivery";
import { Pawnshop } from "./header/Pawnshop/Pawnshop";
import { Basket } from "./header/Basket/basket";
import { Authorization } from "./header/authorization/authorization";





function App() {
  
  return (
      <div className={style.container}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/Exchange' element={<Exchange/>}/>
            <Route path='/Order_status' element={<Order_status/>}/>
            <Route path='/Shops' element={<Shops/>}/>
            <Route path='/Delivery' element={<Delivery />}/>
            <Route path='/Pawnshop' element={<Pawnshop/>}/>
            <Route path='/Basket' element={<Basket/>}/>
            <Route path='/Authorizations' element={<Authorization/>}/>
          </Routes>
          <Footer />
      </div>
  );
  
}

export default App;
