import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./container/HomePage";
import { SignUpPage } from "container/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
