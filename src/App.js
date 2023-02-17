import './App.css';
import About from './components/About/About';
import Projects from './components/MyProjects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import HireButton from './components/HireButton/HireButton';
import SocialIcon from './components/SocialIcon/SocialIcon';

const App=()=> {
  return (
    <div className="App">
     <Navbar/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     <HireButton/>
     <SocialIcon className="sIcone"/>
    </div>
  );
}

export default App;
