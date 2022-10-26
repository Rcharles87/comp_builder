import './App.css';
import Header from './components/Header';
import SplashNav from './components/SplashNav';
import Footer from './components/Footer';
// import Button from './components/shared/Button';
import HomePageCard from './components/HomePageCard';
import SignupForm from './components/SignupForm';
import RestaurantsCard from './components/RestaurantsCards';
import Infographic from './components/Infographic';

function App() {

  // let onButtonClick = name =>{
  //   alert(`${name} cliked!`)
  // }
  return (
    <div className="App">
     <Header/>
     <SplashNav/>
      <div className='content-wrap'>
     <HomePageCard/>
     <Infographic/>
      <RestaurantsCard/>
      {/* <SignupForm/> */}
     {/* <Button name="im a button" size='xlarge' onClick={onButtonClick} /> */}
     {/* <Button name="mars' button" color='secondary' size='large' onClick={onButtonClick}/> */}

      </div>
     <Footer/>
    </div>
  );
}

export default App;
