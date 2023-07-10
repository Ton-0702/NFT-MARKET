import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Ranking from "container/Ranking/Ranking";
import { HomePage } from "./container/HomePage";
import { SignUpPage } from "container/SignUpPage";
import { SignInPage } from "container/SignInPage";
import { NftPage } from "container/NftPage";
import { ConnectWalletPage } from "container/ConnectWalletPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/nft-page" element={<NftPage />} />
      <Route path="/connect-wallet" element={<ConnectWalletPage />} />
    </Routes>
  );
}

export default App;
