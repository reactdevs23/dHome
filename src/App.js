import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="mainPage">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/team" element={<Team />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
