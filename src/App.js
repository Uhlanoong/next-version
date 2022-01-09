import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddData from './Pages/AddData/AddData';
import Age from './Pages/Age/Age';
import Calculation from './Pages/Calculation/Calculation';
import Database from './Pages/Database/Database';
import Menubar from './Pages/Menubar/Menubar';
import Output from './Pages/Output/Output';
import Practice from './Pages/Practice/Practice';
import Previous from './Pages/Previous/Previous';
import Solution from './Pages/Solution/Solution';
import Stackoverflow from './Pages/Stackoverflow/Stackoverflow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
        <Routes>
          <Route path = "/solution" element = {<Solution/>}/>
          <Route path = "/output" element = {<Output/>}/>
          <Route path = "/practice" element = {<Practice/>}/>
          <Route path = "/database" element = {<Database/>}/>
          <Route path = "/adddata" element = {<AddData/>}/>
          <Route path = "/stackoverflow" element = {<Stackoverflow/>}/>
          <Route path = "/calculation" element = {<Calculation/>}/>
          <Route path = "/age" element = {<Age/>}/>
          <Route path = "/previous" element = {<Previous/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
