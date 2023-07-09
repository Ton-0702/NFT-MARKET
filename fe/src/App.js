import { Routes, Route } from "react-router-dom";
import './App.css';
import { HomePage } from "./container/HomePage";
import { SignUpPage } from "container/SignUpPage";
import { SignInPage } from "container/SignInPage";
import { NftPage } from "container/NftPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/nft-page" element={<NftPage />} />
    </Routes>

  );
}

export default App;
