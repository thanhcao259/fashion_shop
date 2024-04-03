import logo from './logo.svg';
import './App.css';
import Navigator
  from './customer/components/Navigator/Navigator';
import Home from './customer/pages/Home';
import Footer from './customer/components/Footer/Footer';
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
      <Footer/>
    </div>
  );
}

export default App;
