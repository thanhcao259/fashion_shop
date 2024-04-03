import logo from './logo.svg';
import './App.css';
import Navigator
  from './customer/components/Navigator/Navigator';
import Home from './customer/pages/Home';
function App() {
  return (
    <div className="">
      <Navigator />
      <div>
        <Home />
      </div>
      {/* <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </header> */}
    </div>
  );
}

export default App;
