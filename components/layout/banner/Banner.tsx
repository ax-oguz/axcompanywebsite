"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Line from "@/public/images/banner/banner-line.png";
import LineTwo from "@/public/images/banner/banner-right-line3.png";
import LineThree from "@/public/images/banner/banner-right-line4.png";
import One from "@/public/images/banner/banner-regular-left-shape.png";
import Two from "@/public/images/banner/banner-solid-left-shape.png";
import Three from "@/public/images/banner/banner-shape-left.png";
import Four from "@/public/images/banner/banner-shape-right-line.png";
import Five from "@/public/images/banner/banner-shape-right.png";
import Six from "@/public/images/banner/banner-right-line1.png";
import Seven from "@/public/images/banner/banner-right-line2.png";
import Eight from "@/public/images/banner/banner-right-line3.png";
import Nine from "@/public/images/banner/banner-right-line4.png";

const Banner = () => {
  return (
    <section className="banner-area">
      <div className="banner__line">
        <Image className="sway__animation" src={Line} alt="shape" priority />
      </div>
      <div className=" banner__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          freeMode={true}
          speed={3000}
          effect={"fade"}
          loop={true}
          roundLengths={true}
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".banner__dot",
            clickable: true,
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".3s"
                className="banner__shape-left2"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".9s"
                className="banner__shape-left1"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div className="banner__shape-left3 " data-aos="fade-left">
                <Image
                  className="sway__animation"
                  src={Three}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="banner__shape-right2"
                data-animation="slideInRight"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={Four} alt="shape" priority />
              </div>
              <div
                className="banner__shape-right1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Five} alt="shape" priority />
              </div>
              <div
                className="banner__right-line1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".9s"
              >
                <Image src={Six} alt="shape" priority />
              </div>
              <div
                className="banner__right-line2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".7s"
              >
                <Image src={Seven} alt="shape" priority />
              </div>
              <div
                className="banner__right-line3"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={Eight} alt="shape" priority />
              </div>
              <div
                className="banner__right-line4"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Nine} alt="shape" priority />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage:
                    "url(/images/banner/data-center-programmers-collaborating-working-neural-networks-ai-databases-min.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    AI Infrastructure & Data Platforms
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                    Secure, Scalable AI for Modern Enterprises
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                    We design resilient data pipelines, GPU capacity, and observability so your
                    AI workloads stay fast, secure, and reliable.
                  </p>
                  <Link
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                    href="about"
                    className="btn-one mt-60"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".3s"
                className="banner__shape-left2"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".9s"
                className="banner__shape-left1"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div className="banner__shape-left3 " data-aos="fade-left">
                <Image
                  className="sway__animation"
                  src={Three}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="banner__shape-right2"
                data-animation="slideInRight"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={Four} alt="shape" priority />
              </div>
              <div
                className="banner__shape-right1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Five} alt="shape" priority />
              </div>
              <div
                className="banner__right-line1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".9s"
              >
                <Image src={Six} alt="shape" priority />
              </div>
              <div
                className="banner__right-line2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".7s"
              >
                <Image src={Seven} alt="shape" priority />
              </div>
              <div
                className="banner__right-line3"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={LineTwo} alt="shape" priority />
              </div>
              <div
                className="banner__right-line4"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={LineThree} alt="shape" priority />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage:
                    "url(/images/banner/engineer-integrating-artificial-intelligence-photovoltaics-factory-production-min.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    Industrial AI & Energy Intelligence
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                    Optimize Production with Computer Vision & IoT
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                    From smart factories to photovoltaics, we deploy models that cut downtime
                    and improve yield with real-time insights.
                  </p>
                  <Link
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                    href="about"
                    className="btn-one mt-60"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".3s"
                className="banner__shape-left2"
              >
                <Image src={One} alt="shape" priority />
              </div>
              <div
                data-animation="slideInLeft"
                data-duration="2s"
                data-delay=".9s"
                className="banner__shape-left1"
              >
                <Image src={Two} alt="shape" priority />
              </div>
              <div className="banner__shape-left3 " data-aos="fade-left">
                <Image
                  className="sway__animation"
                  src={Three}
                  alt="shape"
                  priority
                />
              </div>
              <div
                className="banner__shape-right2"
                data-animation="slideInRight"
                data-duration="3s"
                data-delay=".3s"
              >
                <Image src={Four} alt="shape" priority />
              </div>
              <div
                className="banner__shape-right1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={Five} alt="shape" priority />
              </div>
              <div
                className="banner__right-line1"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".9s"
              >
                <Image src={Six} alt="shape" priority />
              </div>
              <div
                className="banner__right-line2"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".7s"
              >
                <Image src={Seven} alt="shape" priority />
              </div>
              <div
                className="banner__right-line3"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".5s"
              >
                <Image src={LineTwo} alt="shape" priority />
              </div>
              <div
                className="banner__right-line4"
                data-animation="slideInRight"
                data-duration="2s"
                data-delay=".3s"
              >
                <Image src={LineThree} alt="shape" priority />
              </div>
              <div
                className="slide-bg"
                style={{
                  backgroundImage:
                    "url(/images/banner/machine-learning-expert-data-center-maintaining-company-network-min.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner__content">
                  <h4
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                    className="text-white mb-20"
                  >
                    ML Ops & Network Reliability
                  </h4>
                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white"
                  >
                    Deploy ML Safely Across Your Enterprise
                  </h1>
                  <p
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                    className="mt-20"
                  >
                    Model monitoring, drift defense, and automated rollouts keep your AI
                    products reliable in production.
                  </p>
                  <Link
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                    href="about"
                    className="btn-one mt-60"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="banner__dot-wrp">
        <div className="dot-light banner__dot"></div>
      </div>
    </section>
  );
};

export default Banner;
