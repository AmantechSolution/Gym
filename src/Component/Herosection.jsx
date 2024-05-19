import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImage from "../../public/Hero.png";
const Herosection = () => {
  return (
    <>
      <div className="container-fluid" id="home">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-6 content py-5 ">
              <h1 className="headingText">Helps for your </h1>
              <h1 className="headingText"> ideal body fitness</h1>
              <p className="py-2">
                Motivate users with benefits and positive reinforcement, and
                offer modifications and progress tracking.
              </p>
              <a href="#" className="btn btn-success train">
                Start Training
              </a>
              <a href="#" className="btn Demo mx-2">
                <span>
                  <FaPlay />
                </span>
                watch Demo
              </a>
            </div>
            <div className="col-md-6 img_sec">
              <img src={HeroImage} alt="" className="img-fluid hero_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
