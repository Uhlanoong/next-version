import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddData from './Pages/AddData/AddData';
import Age from './Pages/Age/Age';
import Database from './Pages/Database/Database';
import Menubar from './Pages/Menubar/Menubar';
// import SaveData from './Pages/SavedData/SaveData';
import Solution from './Pages/Solution/Solution';
import SpeciesReferenceData from './Pages/SpeciesReferenceData/SpeciesReferenceData';


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
          {/* <Route path = "/savedata" element = {<SaveData/>}/> */}
          <Route path = "/species-reference-data" element = {<SpeciesReferenceData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
