import React from "react";
import SecImg from "../../public/Image(1).png";
import { FaCheckCircle } from "react-icons/fa";

const Section = () => {
  return (
    <>
      <section className="container-fluid" id="transform">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img_section">
                <img src={SecImg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <div className="content">
                <h1>Transform your </h1>
                <h1>physique with our </h1>
                <h1>fitness plan.</h1>
                <ul>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Increase Muscle and Strength
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Be Healthier than before
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Increase Stamina
                  </li>
                </ul>
                <a href="#" className="btn btn_first my-3 mx-1">
                  Join now
                </a>
                <a href="#" className="btn btn-simple">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="conatiner-fluid" id="join">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <h2>
                Enhance user experience with healthy nutrition tips, support
                resources, and social elements.
              </h2>
            </div>
            <div className="col-lg-2 offset-2">
              <a href="#" className="btn btn_first my-3 mx-1">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
