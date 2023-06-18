import React from "react";
// import ImageCarousel from "./ImageCarousel";
import pic_01 from "../Images/IMG_9033.jpg";
import pic_02 from "../Images/IMG_9033.jpg";
import military from "../Images/military.jpg";

const Collections = (props) => {
  const { setActiveMenu, setCurActiveMenu } = props;
  const imgs = [
    { scr: pic_01, text: "calles" },
    { scr: pic_02, text: "military hat" },
  ];

  // const onClickItem = (index, item) => {
  //   props.onClickItem(imgs[index].src);
  // };
  // return <ImageCarousel imgs={imgs} onClickItem={onClickItem} />;

  return (
    <div id="cards">
      <h1>Collection</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pic_01} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={military} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setCurActiveMenu("Hats");
                    setActiveMenu("Hats");
                  }}
                >
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
