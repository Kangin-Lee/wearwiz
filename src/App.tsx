import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/main";
import Home from "./pages/Home/main";
import Login from "./pages/Login/main";
import SignUp from "./pages/SignUp/main";
import Trade from "./pages/Trade/main";
import Nav from "./components/Nav/main";
import TradeDetail from "./pages/TradeDetail/main";
import TradeRegister from "./pages/Trade/TradeRegister/main";
import Wiz from "./pages/Wiz/main";
import ColorMatch from "./pages/ColorMatch/main";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/trade/:id" element={<TradeDetail />} />
        <Route path="/trade/register" element={<TradeRegister />} />
        <Route path="/wiz" element={<Wiz />} />
        <Route path="/colormatch" element={<ColorMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
