import style from "./app.module.css"
import { Bio } from './bio/bio';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
import { Nav } from './nav_gallery/nav_gallery';

function App() {
  return (
    <div className={style.container}>
        <Header />
        <Main />
        <Nav />
        <Bio />
        <Footer />
    </div>
  );
}

export default App;
