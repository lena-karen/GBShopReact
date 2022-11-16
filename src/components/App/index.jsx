import '../../style.css'
import Categories from '../Categories';
import Featured from '../Featured';
import Footer from '../Footer';
import Header from '../Header'
import Introduction from '../Introduction'
import Registration from '../Registration';
import Services from '../Services'
import {useState} from 'react'
function App() {
  const [activeMenu, setMenuActive] = useState(false)
  return (
    <div className="App">
      <Header activeMenu = {activeMenu} setMenuActive = {setMenuActive}/>
      <Introduction />
      <Categories />
      <Featured />
      <Services />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
