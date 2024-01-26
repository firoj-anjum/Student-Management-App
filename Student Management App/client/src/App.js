import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom"
import About from './components/About/About';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
