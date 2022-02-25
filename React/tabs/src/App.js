import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';
import { useState, useEffect } from 'react';




function App() {

  const [tabs, setTabs] = useState([]);
  const [selected, setSelected] = useState({});

  const tabArray = [{
    label: "Tab ",
    content: "This is the content for tab 1"
},{
    label: "Tab ",
    content: "This is the content for tab 2"
},{
    label: "Tab ",
    content: "This is the content for tab 3"
},{
    label: "Tab ",
    content: "This is the content for tab 4"
}]

 useEffect(() => {
   setTabs(tabs => tabArray)
 }, []) 

  return (
    <div className="App">
      <Tabs tabs = {tabs} selected= {selected} setSelected = {setSelected} />
      <Display selected = {selected} />
    </div>
  );
}

export default App;
