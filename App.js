// Packgages
import {Route,Routes} from "react-router-dom";
import style from "./app.module.css"
// Styles
import React from "react"
// Components
import { Footer } from './footer/footer';
import { Exchange } from "./Exchange_and_return/Exchange";
import { Order_status } from "./Order_status/Order_status";
import { Shops } from "./header/Shops/Shops";
import { Pawnshop } from "./header/Pawnshop/Pawnshop";
import { Authorization } from "./header/authorization/authorization";
import { BasketContainer } from "./header/Basket/basketContainer";
import { MainContainer } from "./main/mainContainer";
import { HeaderContainer } from "./header/HeaderContainer";
import { DeliveryContainer } from "./header/Delivery/DeliveryContainer";





function App() {
  return (
      <div className={style.container}>
          <HeaderContainer />
          <Routes>
            <Route path='/' element={<MainContainer />}/>
            <Route path='/Exchange' element={<Exchange />}/>
            <Route path='/Order_status' element={<Order_status />}/>
            <Route path='/Shops' element={<Shops />}/>
            <Route path='/Delivery' element={<DeliveryContainer />}/>
            <Route path='/Pawnshop' element={<Pawnshop />}/>
            <Route path='/Basket' element={<BasketContainer/>}/>
            <Route path='/Authorizations' element={<Authorization />}/>
          </Routes>
          <Footer />
      </div>
  );
  
}

export default App;
