import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const Pricing = () => {
  return (
    <>
      <section className="container-fluid" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-5 mt-3 text-center heading">
              <h3>Pricing</h3>
              <h2>Our List Packages</h2>
            </div>
          </div>
          <div className="row mt-5 pt-3">
            <div className="col-lg-3 col-md-6 my-5 my-lg-0">
              <div className="box">
                <h6>Basic Package</h6>
                <h1 className="my-3">$25</h1>
                <p>per month,bill annualy</p>
                <ul>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Unlimited Gym Access
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    2x Fitness Consultant
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Nutrition Tracking
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    1x Free Suplement
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    3 Days per week
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Personal Trainer
                  </li>
                </ul>
                <a href="#" className="btn my-3">
                  Register Now
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-5 my-lg-0">
              <div className="box ">
                <p className="offer">Best Offer</p>
                <h6>Mid Package</h6>
                <h1 className="my-3">$55</h1>
                <p>per month,bill annualy</p>
                <ul>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Unlimited Gym Access
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    4x Fitness Consultant
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Nutrition Tracking
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    3x Free Suplement
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    5 Days per week
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Personal Trainer
                  </li>
                </ul>
                <a href="#" className="btn my-3">
                  Register Now
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-5 my-lg-0">
              <div className="box">
                <h6>Pro Package</h6>
                <h1 className="my-3">$75</h1>
                <p>per month,bill annualy</p>
                <ul>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Unlimited Gym Access
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    7x Fitness Consultant
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Nutrition Tracking
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    5x Free Suplement
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Gym card
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Personal Trainer
                  </li>
                </ul>
                <a href="#" className="btn my-3">
                  Register Now
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-5 my-lg-0">
              <div className="box">
                <h6>Athlete Package</h6>
                <h1 className="my-3">$105</h1>
                <p>per month,bill annualy</p>
                <ul>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Unlimited Gym Access
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Free Clothes
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    All Training Program
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Free Fitness Consultant
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Free Suplement
                  </li>
                  <li>
                    <span className="mx-2">
                      <FaCheckCircle />
                    </span>
                    Gym Card
                  </li>
                </ul>
                <a href="#" className="btn my-3">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
