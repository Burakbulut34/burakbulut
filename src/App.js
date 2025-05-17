import './App.css';
import Header from "./components/Header/Header"
import Slider from './components/UI/Slider.jsx';
import Services from './components/UI/Services.jsx';
import About  from './components/UI/About.jsx';
import Contact from './components/UI/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return(
    <>
        <Header/>
        <Slider/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>    
    </>
  )
}

export default App;
