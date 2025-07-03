import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import {
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsPlay,
  BsTwitter,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
const About = () => {
  const [setCurrentSlide] = useState(0);
  // const [setLoaded] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // setLoaded(true);
    },
  });

  return (
    <section className="">
      <BreadCrumb title="About Us" home={""} />

      {/* about content */}
      <section className="dark:bg-mediumBlack">
        <div className="Container py-20 2xl:py-[120px] sm:overflow-hidden lg:overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* image */}
            <div
              className="flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/all/jeep safari3.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>

            {/* text */}
            <div
              className="mt-10 md:mt-0 md:ml-10 lg:ml-[90px] 2xl:ml-[100px] font-Garamond space-y-3 xl:space-y-4 flex-1"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                Who We Are
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
                Desert Hermitage: A Sanctuary in the Sand
              </h1>
              <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                Born from heritage, hospitality, and healing — our space is for
                those who seek meaning, stillness, and authenticity.
              </p>

              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
                Crafted from mud, managed with love, and rooted in local
                tradition, we welcome you not just as guests — but as fellow
                wanderers.
              </p>

              <button className="btn-primary mt-[30px]">Contact Us</button>
            </div>

            {/* text */}
          </div>
        </div>
      </section>
      {/* Hostel Facilities */}
      {/* next --> */}

      {/* best hotel manager */}
      <div className="bg-lightBlack -z-[1] py-20 2xl:py-[120px]">
        <div className="Container ">
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
            <div
              className="flex-1 h-[100%] w-full relative "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="flex-1 h-[100%] w-full relative ">
                {/* <img
                  src="/images/all/k 31564.jpg"
                  className="h-full w-full md:h-[80%] lg:h-full object-cover"
                  alt=""
                /> */}
                <video
                  src={"/images/all/7197963_Landscape_Desert_1920x1080.mp4"}
                  autoPlay
                  muted
                  className="h-full w-full md:h-[80%] lg:h-full object-cover"
                />
                {/* <div
                  className="w-[70px] h-[70px]  text-white absolute top-1/2 md:top-[35%] lg:top-1/2 left-[45%] bg-khaki rounded-full flex items-center justify-center cursor-pointer z-[1] "
                  onClick={() => setToggler(!toggler)}
                >
                  <BsPlay className="w-8 h-8" />
                </div> */}
                {/* <span className=" top-[47%] md:top-[33%] lg:top-[48%] left-[42%] lg:left-[43.5%] border w-[90px] h-[90px] rounded-full absolute border-white video-animation"></span> */}
              </div>
              {/* <FsLightbox
                toggler={toggler}
                sources={["https://youtu.be/H1CIBqDeWQ0?si=oY8nGmmZTBYhcB2M"]}
              /> */}
            </div>
            <div
              className="bg-[#f8f6f3] dark:bg-normalBlack space-y-5 flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h5 className="text-base text-khaki leading-[26px] font-semibold">
                Desert Hermitage
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
                🧭 Our Vision: Creating Mindful Spaces in Nature
              </h1>
              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                We believe a stay can be more than a stop. It can be a pause. A
                chance to notice the sky, the sand, the stillness. We’ve
                designed every part of this retreat to help you slow down and
                soften.
              </p>
              <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
                🌾 Our Roots: Built by Locals with Love for the Land
              </h1>
              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                “ Desert Hermitage was founded by Brigadier (Retd.) Udai Singh,
                a soldier and a seeker. It was revived by his son Karan Singh
                Bhati, who infused it with hospitality and heritage. Today, the
                land is cared for by local artisans, hosts, and dreamers. ”
              </p>
              <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
                🤝 What We Offer: Rest, Retreat & Real Connection
              </h1>
              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                More than a bed and meals, we offer space — for solitude,
                curiosity, and discovery. Whether you're meditating at sunrise,
                sipping chai with locals, or dancing under the stars, you'll
                feel part of something both ancient and alive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Members */}
      <div className="dark:bg-normalBlack py-20 2xl:py-[120px]">
        <div className="Container">
          {/* section header */}
          <div
            className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/all/logo.png"
                alt="room_section_logo"
                className="w-[100px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              What Makes Us Different
            </h1>
            <p className="font-Lora leading-7 lg:leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              No artificial entertainment — just nature, culture, and silence{" "}
              <br /> No rushed schedules — your time is your own <br />
              No forced luxury — just comfort that respects the land
              <br /> Community-driven: profits support local artisans and
              sustainability
            </p>
            <div style={{ marginTop: "20px" }}>
              <b>
                “Not all who wander are lost — some are just arriving home.” —
                Anonymous
              </b>
              <hr />
              <b>
                This is not a place to escape life. It’s a place to remember it.
              </b>
            </div>
          </div>

          {/* Section Content */}
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
            {/* Member one */}
            <div
              className="member group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="/images/all/k 31513.jpg" className="w-full" alt="" />
            </div>
            {/* Member two */}
            <div
              className="member group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/all/jeep safari2.jpg"
                className="w-full"
                alt=""
              />
            </div>
            {/* Member three */}
            <div
              className="member group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="/images/all/k 32479.jpg" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blog */}

      <div className=" dark:bg-normalBlack">
        <section className="Container py-20 lg:py-[120px]">
          {/* Section Header */}
          <div
            className=" text-center mx-auto  px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4  ">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="/images/home-1/section-shape1.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[44px] lg:leading-[52px] text-lightBlack dark:text-white  font-Garamond font-semibold uppercase mb-[8px]">
              LATEST POST FROM BLOG
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>
          {/* all blogs are here */}
          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] keen-slider" ref={sliderRef}>
              {/* slide - 1 */}
              <div className="keen-slider__slide number-slide1 ">
                {/* card one */}
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/blog-1.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px] ">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          August 10, 2023
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          Interior
                        </p>
                      </div>
                      <Link to="/blog">
                        <h2 className="text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          Luxury Hotel for Traveling Spot USA, California
                        </h2>
                      </Link>
                    </div>
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <div className="px-[30px] flex items-center justify-between ">
                        <div className="">
                          <span className=" text-sm sm:text-base flex items-center ">
                            <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                              Read More
                            </span>
                          </span>
                        </div>
                        <span className="">
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slide - 2 */}
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/blog-2.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px] ">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          August 10, 2023
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          Interior
                        </p>
                      </div>
                      <Link to="/blog">
                        <h2 className="text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          Luxury Hotel for Traveling Spot USA, California
                        </h2>
                      </Link>
                    </div>
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <div className="px-[30px] flex items-center justify-between ">
                        <div className="">
                          <span className=" text-sm sm:text-base flex items-center ">
                            <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                              Read More
                            </span>
                          </span>
                        </div>
                        <span className="">
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slide - 3 */}
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/blog-3.jpg "
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px] ">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          August 10, 2023
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          Interior
                        </p>
                      </div>
                      <Link to="/blog">
                        <h2 className="text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          Luxury Hotel for Traveling Spot USA, California
                        </h2>
                      </Link>
                    </div>
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <div className="px-[30px] flex items-center justify-between ">
                        <div className="">
                          <span className=" text-sm sm:text-base flex items-center ">
                            <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                              Read More
                            </span>
                          </span>
                        </div>
                        <span className="">
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
