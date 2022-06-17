import './App.scss';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">     
    <Header/>
    <Main/>
    <AboutMe />
    <Portfolio />
    </div>
  );
}

export default App;
