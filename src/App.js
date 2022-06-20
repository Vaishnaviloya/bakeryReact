import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Order from './components/Order';
import Services from './components/Services';
import Mygallery from './components/Mygallery';
import Header from './components/Header';
import Dis from './components/Dis';
import Mycake from './components/Mycake';

function App() {
  return (
    <>
       <Header/>
       <Dis/>
       <Mycake/>
       <Mygallery/>
       <Services/>
      <Order/>    
      <Footer/>
    </>
  );
}

export default App;
