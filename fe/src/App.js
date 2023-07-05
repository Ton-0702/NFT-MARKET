import './App.css';
// import {colors} from '../src/Global'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1 style={{color: colors.blackColor}} >This is NFT page</h1> */}
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
