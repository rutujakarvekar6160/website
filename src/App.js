import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gold from './pages/Gold.js';
import Silver from './pages/Silver.js';
import Diamond from './pages/Diamond.js';
import Platinium from './pages/Platinium.js';
import LoginPage from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Footer from './Component/Footer.js';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gold" element={<Gold/>}></Route>
          <Route path="/silver" element={<Silver/>}></Route>
          <Route path="/diamond" element={<Diamond/>}></Route>
          <Route path="/platinum" element={<Platinium/>}></Route>
          <Route path="/loginpage" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
           
          </Routes>
          <Footer></Footer>
          </BrowserRouter>
    </div>
  );
}

export default App;