import React from "react";
import miami from "../Images/colle_miami.jpg";
import military from "../Images/colle_military.jpg";
import militaryhat from "../Images/militaryhat.jpg";
import caru_02 from "../Images/caru_02.JPG";

const Collections = (props) => {
  const { setActiveMenu, setCurActiveMenu } = props;
  console.log("props: ", props);

  return (
    <div id="cards">
      <h1>Collection</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={miami} className="card-img-top" alt="..." />
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
              <img src={militaryhat} className="card-img-top" alt="..." />
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
              <img src={caru_02} className="card-img-top" alt="..." />
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
