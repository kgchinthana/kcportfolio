import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import * as React from 'react';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Description from './pages/Description';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import MyExperties from './pages/MyExpertise';
import Projects from './pages/Projects';





import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <Description />
          <MyExperties />
          <AboutMe />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
