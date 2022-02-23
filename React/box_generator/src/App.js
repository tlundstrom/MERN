import Form from './components/Form';
import Display from './components/Display';
import './App.css';
import {useState} from 'react';



function App() {

  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <Form setBoxes = { setBoxes } boxes ={ boxes}/>
      <Display boxes = { boxes } />
    </div>
  );
}

export default App;
