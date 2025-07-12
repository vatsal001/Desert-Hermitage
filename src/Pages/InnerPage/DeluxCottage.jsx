import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DeluxCottages = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const location = useLocation();
  const bookingsData = location.state && location.state;

  const navigate = useNavigate();
  const images = [
    "/images/all/villla daylight1.jpg",
    "/images/all/Villa corridor day2.jpg",
    "/images/all/Villa corridor night.jpg",
  ];

  const prevBtn = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const nextBtn = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // booking alert message
  const setAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You booking this rooms?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i want!",
      color: "#fff",
      background: "#c19d68",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Congratulation!",
          text: "Booking Successful!",
          icon: "success",
          background: "#c19d68",
          color: "#fff",
          confirmButtonColor: "#008000",
        });
        navigate("/");
      }
    });
  };
  return (
    <section className="">
      <BreadCrumb title="Deluxe Cottage" />

      {/* Room Details */}
      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            {/* Image custom slider */}
            <div
              className="overflow-hidden relative group "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src={images[imageIndex]}
                alt=""
                className="transition-all duration-500 delay-300"
              />
              <div className="flex ">
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 lg:group-hover:left-6 transition-all duration-300 cursor-pointer"
                  onClick={() => prevBtn()}
                >
                  <BsArrowLeft
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
                <span
                  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 lg:group-hover:right-6 transition-all duration-300 cursor-pointer"
                  onClick={() => nextBtn()}
                >
                  <BsArrowRight
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
              </div>
            </div>
            {/* Room content */}
            <div className="pt-5 lg:pt-[35px]  pr-3">
              <p className="text-base font-Lora text-khaki">LUXURY ROOM</p>
              <h2
                className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                {"Deluxe Cottage"}
              </h2>
              <p
                className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                More space. More comfort. More soul.
                <br /> Our Deluxe Cottages are designed for guests who want a
                little extra — more room to stretch, relax, and stay longer.
                These thoughtfully expanded spaces feature a charming sitting
                area, allowing you to enjoy a quiet read, morning tea, or sunset
                reflections indoors. With enhanced comfort and elegant
                Rajasthani design touches — from carved woodwork to traditional
                textiles — these cottages blend rustic authenticity with subtle
                luxury. Every detail, from the hand-laid floors to the soft
                lighting, invites relaxation and reflection. Whether you're a
                couple on a retreat, a writer seeking inspiration, or a guest
                desiring a longer desert stay, the Deluxe Cottage offers a
                perfect balance of charm and convenience.
              </p>
              <p
                className="mt-5 2xl:mt-7 text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <ul>Features:</ul>

                <li>Spacious interiors with dedicated sitting/reading area</li>

                <li>Queen-size bed with premium bedding</li>

                <li>Artistic decor with regional craftsmanship</li>

                <li>Private ensuite bathroom with high-quality fittings</li>

                <li>Optional open-to-sky shower (select rooms)</li>

                <li>
                  Ideal for longer stays or travelers who want added privacy and
                  space
                </li>
              </p>
              {/* Check-In and check-Out */}
              <div
                className="md:flex items-center flex-col md:flex-row md:justify-between py-10 lg:py-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div>
              <div className=" bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-8 md:py-10 lg:px-9 lg:py-11 2xl:px-10 2xl:pt-[45px] 2xl:pb-[30px] grid-flow-row-dense">
                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-4">
                  Features
                </h4>
                <div
                  className="grid items-center gap-[18px] "
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6 ">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Accommodation in well-appointed rooms.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Indian style Breakfast
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Live barbecue candle lit dinner on the sand dunes.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Jeep Ride from the resort to the dunes and back.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-lightBlack h-10 lg:h-[50px] 2xl:h-[56px] grid items-center justify-start px-3 sm:px-5 2xl:px-6">
                    <p className="text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white">
                      Camel Ride on the sand dunes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div
              className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-6">
                Amenities
              </h4>
              <div className="grid items-center ">
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-2.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Free WiFi Available & Tv/Ac
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-3.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Private balcony
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-4.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    Breakfast & Electric kettle
                  </span>
                </div>
                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                  <img
                    src="/images/inner/room-amenities-5.png"
                    className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                  />
                  <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                    800 sq ft rooms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeluxCottages;
