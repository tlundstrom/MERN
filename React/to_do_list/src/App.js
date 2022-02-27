import { useState } from 'react';
import './App.css';
import List from './components/List';
import Input from './components/Input';


function App() {
  const [tasks, setTasks] = useState([]);

   

  return (
    <div className="App">
      <Input tasks = {tasks} setTasks = {setTasks}/>
      <List tasks = {tasks} setTasks = {setTasks}/>
    </div>
  );
}

export default App;
