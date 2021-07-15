import Topbar from './component/topbar/Topbar';
import Intro from './component/intro/Intro'
import Portfolio from './component/portfolio/Portfolio'
import Work from './component/work/Work'
import Testimonial from './component/testimonial/testimonial';
import Contact from './component/contact/Contact';
import Menu from './component/menu/Menu';
import './app.scss';
import {useState} from 'react'
 

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
