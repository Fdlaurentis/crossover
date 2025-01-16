import { Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import imgHeader from './assets/header1.jpg';
import NavBar from './components/NavBar/NavBar.component';
import Footer from './components/Footer/Footer.component';
import Sedes from './components/sedes/Sedes.component';
import Home from './components/home/Home.component';
import Programs from './components/programs/Programs.component';
import Contact from './components/contact/Contact.component';

function App() {
    return (
        <div className="body">
            <HashRouter>
                <NavBar />
                <img src={imgHeader} className="imgHeader"></img>
                {/* <a href="https://wa.link/mf3yg1">
                <img src={iconoWhatsApp} className="iconWhatsApp" />
            </a> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sedes" element={<Sedes />} />
                    <Route path="/programas" element={<Programs />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
