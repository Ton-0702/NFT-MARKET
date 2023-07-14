import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Ranking from "container/Ranking/Ranking";
import { HomePage } from "./container/HomePage";
import { SignUpPage } from "container/SignUpPage";
import { SignInPage } from "container/SignInPage";
import { MarketPlace } from "container/MarketPlace";
import { NftPage } from "container/NftPage";
import { ConnectWalletPage } from "container/ConnectWalletPage";
import { ArtistPage } from "container/ArtistPage";
import { ProfileDetail } from "container/ProfileDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/market-place" element={<MarketPlace />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/nft-page" element={<NftPage />} />
      <Route path="/connect-wallet" element={<ConnectWalletPage />} />
      <Route path="/artist" element={<ArtistPage />} />
      <Route path="/profile-details" element={<ProfileDetail />} />
    </Routes>
  );
}

export default App;
