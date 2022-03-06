import { useParams } from 'react-router-dom';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Path from './components/Path';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:path' element={<Path />} />
          <Route path='/:path/:color' element={<Path />} />
          <Route path='/:path/:color/:bgcolor' element ={<Path />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
