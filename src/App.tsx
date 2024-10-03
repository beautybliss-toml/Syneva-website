import "./App.css";
import { Footer, Navbar } from "./components";
import { Home, Privacy, Stake, Swap, Team } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
