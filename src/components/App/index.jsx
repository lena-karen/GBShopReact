import '../../style.css'
import Categories from '../Categories';
import Featured from '../Featured';
import Footer from '../Footer';
import Header from '../Header'
import Introduction from '../Introduction'
import Registration from '../Registration';
import Services from '../Services'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import IndexPage from '../../Pages/IndexPage';
import CartPage from '../../Pages/CartPage'
import CatalogPage from '../../Pages/CatalogPage';
function App() {
  const [activeMenu, setMenuActive] = useState(false)
  return (
    <div className="App">
      <Header activeMenu = {activeMenu} setMenuActive = {setMenuActive}/>

      <Routes>
        <Route path = '/' element = {<IndexPage />} />
        <Route path = '/cart_page' element = {<CartPage />} />
        <Route path = '/catalog_page' element = {<CatalogPage />} />
      </Routes>
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
