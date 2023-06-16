import Navbar from "./components/Navbar";
import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Collections from "./components/Collections";
import ComingSoon from "./components/ComingSoon";
import AboutUs from "./components/AboutUs";
import OnSale from "./components/OnSale";
import Hoodies from "./components/Hoodies";
import Tshirts from "./components/Tshirts";
import Hats from "./components/Hats";

function App() {
  const [activeMenu, setActiveMenu] = useState("AboutUs");
  return (
    <div className="App">
      <Navbar setActiveMenu={setActiveMenu} />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 col-md-6 col-sm-5 left-container"
            id="container_color"
          >
            {activeMenu === "Collections" && <Collections />}
            {activeMenu === "ComingSoon" && <ComingSoon />}
            {activeMenu === "AboutUs" && <AboutUs />}
            {activeMenu === "OnSale" && <OnSale />}
            {activeMenu === "Hoodies" && <Hoodies />}
            {activeMenu === "Tshirts" && <Tshirts />}
            {activeMenu === "Hats" && <Hats />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
