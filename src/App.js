import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <HashRouter>
      <Navbar/>
      <Body/>

      {/* Switch is now changed to Routes in the updated version of React */}
      <Routes>
        <Route exact path='/' element={<Body key="Body"/>}></Route>
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
