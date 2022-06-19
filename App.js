// Packages
import {Route,Switch} from "react-router-dom";
// Styles
import style from "./app.module.css"
// Components
import { Footer } from './footer/footer';
import { Exchange } from "./Exchange_and_return/Exchange";
import { Order_status } from "./Order_status/Order_status";
import { Shops } from "./header/Shops/Shops";
import { Pawnshop } from "./header/Pawnshop/Pawnshop";
import { Authorization } from "./header/authorization/authorization.tsx";
import { BasketContainer } from "./header/Basket/basketContainer.tsx";
import { MainContainer } from "./main/mainContainer.tsx";
import { DeliveryContainer } from "./header/Delivery/DeliveryContainer.tsx";
import { HeaderContainer } from "./header/HeaderContainer.tsx";
import { Login } from "./header/authorization/login";
import { Registr } from "./header/authorization/register";
import  NewContainer  from "./header/modals/jewelryTypes/New/NewContainer";
import { Neckleace } from "./header/modals/jewelryTypes/Neckleace";
import { Gold } from "./header/modals/jewelryTypes/Gold";





function App() {
  return (
      <div className={style.container}>
          <HeaderContainer />
          <Switch>
            <Route exact path='/' component={MainContainer}/>
            <Route exact path='/Exchange' component={Exchange}/>
            <Route exact path='/Order_status' component={Order_status}/>
            <Route exact path='/Shops' component={Shops}/>
            <Route exact path='/Delivery' component={DeliveryContainer}/>
            <Route exact path='/Pawnshop' component={Pawnshop}/>
            <Route exact path='/Basket' component={BasketContainer}/>
            <Route exact path='/Authorizations' component={Authorization}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/Register' component={Registr}/>
            //modal//
            <Route exact path='/New' component={NewContainer}/>
            <Route exact path='/Neckleace' component={Neckleace}/>
            <Route exact path='/Gold' component={Gold}/>
          </Switch>
          <Footer />
      </div>
  );
  
}

export default App;
