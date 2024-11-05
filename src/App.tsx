import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Download, Home, NotFound, Privacy, Reward, Stake, Swap, Team } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/team" element={<Team />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
