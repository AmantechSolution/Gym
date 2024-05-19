import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

import cardio from "../../public/cardio.png";
import fatlose from "../../public/FatloseW.png";
import muscle from "../../public/MuscleGainW.png";
import Nutritions from "../../public/NutritionW.png";
const programe = () => {
  return (
    <>
      <div className="container-fluid" id="programe">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="highlight">Programe</h1>
              <h1 className="main_head">Explore Our Program</h1>
            </div>
          </div>
        </div>
        {/* slider section */}
        <section className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="box">
                <div className="icon">
                  <img src={cardio} alt="" />
                </div>
                <div className="content my-3">
                  <h2>Cardio Strength</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    venenatis, nunc a pretium viverra.
                  </p>
                </div>
              </div> */}
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="box">
                    <div className="icon">
                      <img src={cardio} alt="" />
                    </div>
                    <div className="content my-3">
                      <h2>Cardio Strength</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut venenatis, nunc a pretium viverra.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <div className="icon">
                      <img src={fatlose} alt="" />
                    </div>
                    <div className="content my-3">
                      <h2>Fat Lose</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut venenatis, nunc a pretium viverra.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <div className="icon">
                      <img src={muscle} alt="" />
                    </div>
                    <div className="content my-3">
                      <h2>Fat Lose</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut venenatis, nunc a pretium viverra.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box">
                    <div className="icon">
                      <img src={Nutritions} alt="" />
                    </div>
                    <div className="content my-3">
                      <h2>Nutritions</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut venenatis, nunc a pretium viverra.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>

      {/* swiper slide check */}
    </>
  );
};

export default programe;
