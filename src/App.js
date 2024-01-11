import image from './images/apptron-logo-186x178.png'
import './App.css';
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import './style/MainBody.css';
import AboutUs from "./components/AboutUs";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

function App() {


    return (
    <div className="App">

        <Header/>

        <main >

            <Carousel/>

            <AboutUs/>

            <Partners/>
            <Contact/>
        </main>

    </div>
  );
}

export default App;
