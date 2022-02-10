import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Navigation></Navigation>
        <Main></Main>
        <Footer></Footer>
    </div>
  );
}

export default App;