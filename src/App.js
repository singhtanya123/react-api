import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Header from "./Header";

function App() {
  return (
    <div className='margin-left App primary-color'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Header />
      </header>
    </div>
  );
}

export default App;
