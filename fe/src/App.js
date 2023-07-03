import { Routes, Route } from "react-router-dom";

import './App.css';
import {colors} from '../src/Global'
import { HomePage } from './Container/HomePage';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
