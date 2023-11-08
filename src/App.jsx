import './App.scss';
import About from './components/About/About';
import Body from './components/Body/Body';
import Footer from './components/Foot/Footer';
import Header from './components/Head/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
