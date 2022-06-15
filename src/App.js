import './App.scss';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">     
    <Header/>
    <Main/>
    <AboutMe />
    </div>
  );
}

export default App;
