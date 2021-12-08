import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menubar from './Pages/Menubar/Menubar';
import Solution from './Pages/Solution/Solution';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
        <Routes>
          <Route path = "/solution" element = {<Solution/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
