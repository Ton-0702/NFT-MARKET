import './App.css';

// import Ranking from './components/Ranking/Ranking';
import PrimaryLayout from './components/Layout/PrimaryLayout';

function App() {
  return (
    <div className="App">
      {/* <h1 style={{color: colors.blackColor}} >This is NFT page</h1> */}
      <PrimaryLayout>{/* <Ranking></Ranking> */}</PrimaryLayout>
    </div>
  );
}

export default App;
