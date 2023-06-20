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
import YouTubeVD from "./components/YouTube";
import ImageModal from "./components/ImageModal";

function App() {
  const [activeMenu, setActiveMenu] = useState("AboutUs");
  const [curActiveMenu, setCurActiveMenu] = useState("AboutUs");
  const [selectedImgSrc, setSelectedImageSrc] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const onClickItem = (imgSrc) => {
    setSelectedImageSrc(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <Navbar
        setActiveMenu={setActiveMenu}
        curActiveMenu={curActiveMenu}
        setCurActiveMenu={setCurActiveMenu}
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 col-md-6 col-sm-5 left-container"
            id="container_color"
          >
            {activeMenu === "Collections" && (
              <Collections
                setActiveMenu={setActiveMenu}
                setCurActiveMenu={setCurActiveMenu}
              />
            )}
            {activeMenu === "ComingSoon" && <ComingSoon />}
            {activeMenu === "AboutUs" && <AboutUs />}
            {activeMenu === "OnSale" && <OnSale />}
            {activeMenu === "Hoodies" && <Hoodies />}
            {activeMenu === "Tshirts" && <Tshirts />}
            {activeMenu === "Hats" && <Hats />}
            <ComingSoon onClickItem={onClickItem} />
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-7 right-container"
            id="second_container_color"
          >
            <h1>hello</h1>
            <YouTubeVD />
          </div>
          <ImageModal
            imgSrc={selectedImgSrc}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
