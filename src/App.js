import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

import Projects from './pages/Projects';
import Aboutpage from './pages/Aboutpage';
import Resumepage from './pages/Resumepage';
import Contactpage from './pages/Contactpage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>        
        <Route exact path="/website"> 
          <Homepage />
        </Route>
        <Route path="/about">
          <Aboutpage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">
          <Resumepage />
        </Route>
        <Route path="/contact">
          <Contactpage />
        </Route>
      </Switch>           
      <Footer />
    </Router>
    
  );
}

export default App;
