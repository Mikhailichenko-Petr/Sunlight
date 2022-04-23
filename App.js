import { BrowserRouter } from "react-router-dom";
import style from "./app.module.css"

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from "./main/main";


function App() {
  return (
    <BrowserRouter>
      <div className={style.container}>
          <Header />
          <Main /> 
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
