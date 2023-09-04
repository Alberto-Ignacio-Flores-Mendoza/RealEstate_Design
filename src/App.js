import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';

import './App.css'
import Residencies from './components/Residencies/Residencies';
import Value from './components/Values/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <div >
        <div className='white-gradient'></div>
          <Header></Header>
          <Hero></Hero>

      </div>
      
      <Companies></Companies>
      <Residencies></Residencies>
      <Value></Value>
      <Contact></Contact>
      <GetStarted></GetStarted>
      <Footer></Footer>
      </div>
  )
}

export default App;
