import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { Header } from "./components/Header.tsx";
import BottomNav from "./components/BottomNav.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
