import './App.css';
import Footer from './components/Footer/Footer.component';
import NavBar from './components/NavBar/NavBar.component';
import imgHeader from './assets/header1.jpg';
import Beginning from './components/beginning/Beginning.component';
import Programs from './components/programs/Programs.component';

function App() {
    return (
        <div className="body">
            <NavBar />
            <img src={imgHeader} className="imgHeader"></img>
            <Programs />
            <Beginning />
            <Footer />
        </div>
    );
}

export default App;
