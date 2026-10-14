import './App.scss';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import ApiMonitor from './components/ApiMonitor';
import EmergencySwitch from './components/EmergencySwitch';
import PaymentSimulator from './components/PaymentSimulator';
import UserSearch from './components/UserSearch';

function App() {
  return (
    <div className="App">     
    <Header/>
    <Main/>
    <AboutMe />
    <Portfolio />
    <ApiMonitor/>
    <EmergencySwitch/>
    <PaymentSimulator/>
    <UserSearch/>
    </div>
  );
}

export default App;
