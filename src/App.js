import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './Header';

function App() {
  return (
    <div className="margin-left App primary-color">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Let's get started   
        </p>
        <Header ></Header>        
      </header>
    </div>
  );
}



export default App;
