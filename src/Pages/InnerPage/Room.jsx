import { FaStar } from "react-icons/fa";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import Swal from "sweetalert2";

const Room = () => {
  // facilities slider breckpoints
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 10,
      },
      "(min-width: 500px)": {
        slides: { origin: "center", perView: 1.5 },
        spacing: 10,
      },
      "(min-width: 600px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 15,
      },
      "(min-width: 768px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 18,
      },
      "(min-width: 992px)": {
        slides: { origin: "center", perView: 2 },
        spacing: 20,
      },
    },
    loop: true,
    initial: 0,
  });

  return (
    <section className="">
      <BreadCrumb title="ACCOMODATION" home={"/"} />

      {/* All rooms */}

      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container ">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section Logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/all/logo.png"
                alt="room_section_logo"
                className="w-[100px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
              Desert Hermitage's Accomodations
            </h1>
          </div>
          {/* Rooms Slider Container */}

          <div className="mt-14 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
            {/* Room - 1 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/all/Villa corridor night.jpg"
                    className="w-full h-full object-cover group-group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>

                {/* <Link to={"/contact"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link> */}
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <Link to="/contact" state={{ title: "Delux Family Rooms" }}>
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        🛖 Classic Mud Cottage
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-dark  dark:text-lightGray font-Lora">
                      Circular, hand-built cottages with queen beds, handcrafted
                      decor, and windows opening to desert calm.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 2 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/all/suite 2.jpg"
                    className="w-full h-full object-cover group-group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>

                {/* 
                <Link to={"/contact"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link> */}
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <Link to="/contact" state={{ title: "Delux Family Rooms" }}>
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        🏡 Deluxe Cottage
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-dark  dark:text-lightGray font-Lora">
                      CSpacious and stylish with Rajasthani accents, perfect for
                      longer stays and extra comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 3 */}
            <div
              className="overflow-x-hidden 3xl:w-[410px] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/images/all/Villa sitout front.jpg"
                    className="w-full h-full object-cover group-group-hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                </div>

                {/* <Link to={"/contact"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-khaki  absolute bottom-0 -left-40 px-6 py-1 text-white  group-hover:left-0 transition-all duration-300">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                  </button>
                </Link> */}
              </div>
              <div className="font-Garamond">
                <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242]  border-t-0">
                  <div className="py-6 px-[30px]">
                    <Link to="/contact" state={{ title: "Delux Family Rooms" }}>
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                        👥 Group Stay Hut
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-dark  dark:text-lightGray font-Lora">
                      Shared yet private — ideal for friends, backpackers, or
                      retreat groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Facilities */}
      <div className="bg-normalBlack py-20 lg:py-[120px] relative">
        <div className="Container pb-[100px] ">
          {/* Section heading */}
          <div
            className="flex items-center justify-between relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" sapce-y-3 md:space-y-4 lg:space-y-5 md:w-[450px] xl:w-[550px] font-Garamond">
              <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-white font-semibold uppercase">
                Room Categories For Fabulous Life
              </h1>
            </div>
          </div>
          <hr className="w-full h-[2px] text-gray bg-gray mt-10 " />

          {/* Clients Facilities  */}
          <div className="mt-14 2xl:mt-[60px] grid grid-cols-6 gap-5 md:gap-[30px] ">
            <div
              className="col-span-6 sm:col-span-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/inner/faciliies-icon.png"
                alt="facilities-icon"
                className="w-10 h-10 md:w-20 md:h-20 xl:h-[100px] xl:w-[100px]"
              />
              <div className="my-5 2xl:my-[30px]">
                <h2 className="text-white text-xl sm:text-2xl 2xl:text-3xl leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] font-semibold font-Garamond">
                  Inclusions in All Stays:
                </h2>
                <p className="text-sm sm:text-base font-Lora leading-[26px] text-lightGray">
                  Our stay options are inspired by the traditional lifestyle of
                  the Thar Desert — simple, beautiful, and soulful. Each space
                  is designed to help you slow down, breathe deeper, and connect
                  with your surroundings. With earthy textures, local materials,
                  and thoughtful details, your room becomes more than just a
                  place to sleep — it becomes part of your journey.
                </p>
              </div>
              <div className="my-5 2xl:my-[30px]">
                <h2 className="text-white text-xl sm:text-2xl 2xl:text-3xl leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] font-semibold font-Garamond">
                  Special Touches:
                </h2>
                <p className="text-sm sm:text-base font-Lora leading-[26px] text-lightGray">
                  Local handcrafted décor in each space Mud walls and natural
                  roofing to regulate temperature naturally Sit-out patios for
                  morning tea or evening stargazing Daily housekeeping with
                  eco-friendly practices
                </p>
              </div>
              <div className="my-5 2xl:my-[30px]">
                <h2 className="text-white text-xl sm:text-2xl 2xl:text-3xl leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] font-semibold font-Garamond">
                  Note:
                </h2>
                <p className="text-sm sm:text-base font-Lora leading-[26px] text-lightGray">
                  Every room is different — no two cottages are alike. Each
                  space reflects the flavor of the village, the calm of the
                  desert, and the legacy of the land. We invite you to choose
                  not just where you sleep, but how you wish to feel.
                </p>
              </div>
              <Link
                to={"/contact"}
                className="flex items-center text-lightGray text-base font-Garamond font-semibold group hover:text-khaki dark:hover:text-khaki"
              >
                Contact Us
                <HiArrowLongRight className="w-6 h-5 text-khaki ml-2 group-hover:ml-3 transition-all duration-300" />
              </Link>
            </div>
            {/* facilities slider */}
            <div
              ref={sliderRef}
              className="keen-slider col-span-6 sm:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              {/* slide 1 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <img src="/images/all/jeep safari2.jpg" className="" alt="" />
                  {/* <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Gym Training Ground
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div> */}
                </div>
              </div>
              {/* slide 2 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <img src="/images/all/k 32478.jpg" className="" alt="" />
                  {/* <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Gym Training Ground
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div> */}
                </div>
              </div>
              {/* slide 3 */}
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <img
                    src="/images/all/Villa corridor day2.jpg"
                    className=""
                    alt=""
                  />
                  {/* <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Gym Training Ground
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="col-span-2 relative">
                  <img
                    src="/images/all/Villa exterior night.jpg"
                    className=""
                    alt=""
                  />
                  {/* <div className="inline-flex items-center justify-between bg-lightBlack  hover:bg-whiteSmoke dark:hover:bg-white transition-all duration-300 w-[90%] float-right absolute bottom-0 right-[20px] group">
                    <p className="text-white text-lg sm:text-xl lg:text-[18px] xl:text-[22px]  group-hover:text-lightBlack leading-6 font-semibold font-Garamond px-5">
                      Gym Training Ground
                    </p>
                    <button className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]  flex items-center justify-center bg-khaki">
                      <HiArrowLongRight className="w-5 h-5 text-white    " />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
