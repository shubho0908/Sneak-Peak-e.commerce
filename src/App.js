import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <HashRouter>
      <Navbar/>

      {/* Switch is now changed to Routes in the updated version of React */}
      <Routes>
        <Route exact path='/' element={<Body key="Body"/>}></Route>
        <Route exact path='/about' element={<About key="about"/>}></Route>

      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
