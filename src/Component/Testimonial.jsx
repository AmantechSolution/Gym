import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import star from "../../public/star.png";
import person from "../../public/person.png";
import muscle from "../../public/MuscleGainW.png";
import Nutritions from "../../public/NutritionW.png";
const Testimonial = () => {
  return (
    <>
      <section className="container-fluid" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="fixed">Testimonial</h1>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6 content">
              <h3 className="headingText my-3 my-lg-0">
                What Our Member Say About Us?
              </h3>
            </div>
            <div className="col-lg-6 slider">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="box">
                    <div className="icon text-right">
                      <img src={star} alt="" />
                    </div>
                    <div className="content my-3">
                      <p>
                        “ Join this fitness member, the best choice that I’ve.
                        They’re very professional and give you suggestion about
                        what food and nutrition that you can eat”
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="icon">
                        <img src={person} alt="" />
                      </div>
                      <div className="head mx-3">
                        <p>Jonathan Edward</p>
                        <p className="ocup">Office Worker</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <div className="icon text-right">
                      <img src={star} alt="" />
                    </div>
                    <div className="content my-3">
                      <p>
                        “ Join this fitness member, the best choice that I’ve.
                        They’re very professional and give you suggestion about
                        what food and nutrition that you can eat”
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="icon">
                        <img src={person} alt="" />
                      </div>
                      <div className="head mx-3">
                        <p>Jonathan Edward</p>
                        <p className="ocup">Office Worker</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <div className="icon text-right">
                      <img src={star} alt="" />
                    </div>
                    <div className="content my-3">
                      <p>
                        “ Join this fitness member, the best choice that I’ve.
                        They’re very professional and give you suggestion about
                        what food and nutrition that you can eat”
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="icon">
                        <img src={person} alt="" />
                      </div>
                      <div className="head mx-3">
                        <p>Jonathan Edward</p>
                        <p className="ocup">Office Worker</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <div className="icon text-right">
                      <img src={star} alt="" />
                    </div>
                    <div className="content my-3">
                      <p>
                        “ Join this fitness member, the best choice that I’ve.
                        They’re very professional and give you suggestion about
                        what food and nutrition that you can eat”
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="icon">
                        <img src={person} alt="" />
                      </div>
                      <div className="head mx-3">
                        <p>Jonathan Edward</p>
                        <p className="ocup">Office Worker</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
