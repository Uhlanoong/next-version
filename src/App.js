import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddData from './Pages/AddData/AddData';
import Age from './Pages/Age/Age';
import Database from './Pages/Database/Database';
import Menubar from './Pages/Menubar/Menubar';
import Solution from './Pages/Solution/Solution';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
        <Routes>
          <Route path = "/solution" element = {<Solution/>}/>
          <Route path = "/database" element = {<Database/>}/>
          <Route path = "/adddata" element = {<AddData/>}/>
          <Route path = "/age" element = {<Age/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
