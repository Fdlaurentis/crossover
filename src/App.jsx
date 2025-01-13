import './App.css';
import imgHeader from './assets/header1.jpg';
import iconoWhatsApp from './assets/icon.png';
import Footer from './components/Footer/Footer.component';
import NavBar from './components/NavBar/NavBar.component';
import Beginning from './components/beginning/Beginning.component';
import Programs from './components/programs/Programs.component';
import Sponsor from './components/sponsor/Sponsor.component';

function App() {
    return (
        <div className="body">
            <NavBar />
            <img src={imgHeader} className="imgHeader"></img>
            {/* <a href="https://wa.link/mf3yg1">
                <img src={iconoWhatsApp} className="iconWhatsApp" />
            </a> */}
            <Programs />
            <Beginning />
            <Sponsor />
            <Footer />
        </div>
    );
}

export default App;
