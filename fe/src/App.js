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
import { LoginSuccessPage } from "container/LoginSuccessPage";
import { CreateNFTPage } from "container/CreateNFT";
import UploadFileToCloud from "components/UploadFile/UploadFileToCloud";

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
      <Route path="/profile-details" element={<ProfileDetail />} />
      <Route path="/login-success" element={<LoginSuccessPage />} />
      <Route path="/create-nft" element={<CreateNFTPage />} />
      <Route path="/upload" element={<UploadFileToCloud />} />
      <Route path="/nft-detail-page/:nftId" element={<NftPage />} />
      <Route path="/artist/:artistId" element={<ArtistPage />} />
    </Routes>
  );
}

export default App;
