import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/main";
import Home from "./pages/Home/main";
import Login from "./pages/Login/main";
import SignUp from "./pages/SignUp/main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
