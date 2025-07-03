import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbAirConditioning } from "react-icons/tb";

const Facilities = () => {
  return (
    <section className="py-20 2xl:py-[120px] bg-whiteSmoke dark:bg-normalBlack">
      <div className="Container">
        {/* section heading */}
        <div
          className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[280px] font-Garamond"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="text-base lg:text-lg font-medium text-khaki leading-[28px]">
            Our Best Highlights
          </h4>
          <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-lightBlack dark:text-white mt-2 md:mt-[10px]  mb-[12px] lg:mb-4 xl:mb-[20px] font-bold">
            Featured Highlights
          </h1>
        </div>
        {/* section content*/}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-14 ">
          <div
            className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0 sm:px-10 md:px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                {/* <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki transition-all duration-500" /> */}
                <span className="absolute top-[15px] right-[15px]">🛖</span>
              </div>

              <h2 className="text-[22px] lg:text-[25px] xl:text-[28px] leading-[26px] text-lightBlack dark:text-white mt-[30px] mb-[25px] font-bold">
                Authentic Mud Cottages
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[20px] font-normal">
                Handcrafted using traditional materials, these cottages stay
                cool in the heat and cozy at night — offering a rustic charm
                with modern comforts.
              </p>
              {/* <Link
                to={"/find_room"}
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-[20px]"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link> */}
            </div>
          </div>
          {/* Swimming Pool */}
          <div
            className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0 sm:px-10 md:px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                {/* <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki transition-all duration-500" /> */}
                <span className="absolute top-[15px] right-[15px]">🐪</span>
              </div>

              <h2 className="text-[22px] lg:text-[25px] xl:text-[28px] leading-[26px] text-lightBlack dark:text-white mt-[30px] mb-[25px] font-bold">
                Desert Adventures & Safari
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[20px] font-normal">
                Explore the majestic Thar Desert on camelback or in a 4x4 jeep.
                Each journey unveils endless dunes, ancient trails, and
                unforgettable sunsets.
              </p>
              {/* <Link
                to={"/find_room"}
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-[20px]"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link> */}
            </div>
          </div>
          {/* Comfortable rooms */}
          <div
            className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0 sm:px-10 md:px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                {/* <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki transition-all duration-500" /> */}
                <span className="absolute top-[15px] right-[15px]">🧘‍♀️</span>
              </div>

              <h2 className="text-[22px] lg:text-[25px] xl:text-[28px] leading-[26px] text-lightBlack dark:text-white mt-[30px] mb-[25px] font-bold">
                Peaceful Environment for Meditation & Yoga
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[20px] font-normal">
                With rooftop spaces and quiet nooks, the resort invites you to
                breathe deeply, stretch gently, and simply be — with only the
                desert wind as background music.
              </p>
              {/* <Link
                to={"/find_room"}
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-[20px]"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link> */}
            </div>
          </div>
          <div
            className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0 sm:px-10 md:px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                {/* <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki transition-all duration-500" /> */}
                <span className="absolute top-[15px] right-[15px]">🍲</span>
              </div>

              <h2 className="text-[22px] lg:text-[25px] xl:text-[28px] leading-[26px] text-lightBlack dark:text-white mt-[30px] mb-[25px] font-bold">
                Local Cuisine & Cultural Evenings
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[20px] font-normal">
                Savor Rajasthani flavors made with love, then unwind by the fire
                with folk music, dance, and stories passed down through
                generations.
              </p>
              {/* <Link
                to={"/find_room"}
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-[20px]"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link> */}
            </div>
          </div>
          <div
            className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0 sm:px-10 md:px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                {/* <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki transition-all duration-500" /> */}
                <span className="absolute top-[15px] right-[15px]">🌌</span>
              </div>

              <h2 className="text-[22px] lg:text-[25px] xl:text-[28px] leading-[26px] text-lightBlack dark:text-white mt-[30px] mb-[25px] font-bold">
                Star-lit Dune Dinners
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[20px] font-normal">
                Dine atop golden dunes with candles, cushions, and the stars
                above. A once-in-a-lifetime experience that touches something
                deeper.
              </p>
              {/* <Link
                to={"/find_room"}
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-[20px]"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link> */}
            </div>
          </div>
          <div
            className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0 sm:px-10 md:px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                {/* <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki transition-all duration-500" /> */}
                <span className="absolute top-[15px] right-[15px]">📚 </span>
              </div>

              <h2 className="text-[22px] lg:text-[25px] xl:text-[28px] leading-[26px] text-lightBlack dark:text-white mt-[30px] mb-[25px] font-bold">
                Library Lounge for Quiet Reading & Reflection
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[20px] font-normal">
                A cozy space to journal, read, or just sit still — surrounded by
                books and silence.
              </p>
              {/* <Link
                to={"/find_room"}
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-[20px]"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link> */}
            </div>
          </div>
          <div
            className="px-[30px]  text-center  relative z-[1] before:absolute before:w-0 before:h-full before:left-1/2 before:top-0 before:bg-white dark:before:bg-lightBlack before:z-[-1] before:transition-all before:duration-500 before:hover:w-full before:hover:left-0 sm:px-10 md:px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" text-center font-Garamond group pt-[15px]">
              <div className="mx-auto w-[55px] h-[55px] rounded-[50%] bg-white group-hover:bg-whiteSmoke dark:bg-lightBlack dark:group-hover:bg-normalBlack transition-all duration-300 relative">
                {/* <TbAirConditioning className="w-[43px] h-[45px] absolute top-[20px] right-[5px] text-lightBlack dark:text-white group-hover:text-khaki transition-all duration-500" /> */}
                <span className="absolute top-[15px] right-[15px]">🌅 </span>
              </div>

              <h2 className="text-[22px] lg:text-[25px] xl:text-[28px] leading-[26px] text-lightBlack dark:text-white mt-[30px] mb-[25px] font-bold">
                Unforgettable Sunsets
              </h2>
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-Lora mb-[20px] font-normal">
                Watch the sky burst into color each evening as the desert
                transforms from gold to crimson to indigo.
              </p>
              {/* <Link
                to={"/find_room"}
                className="group-hover:opacity-100 flex items-center justify-center text-khaki transition-all duration-300 text-sm sm:text-[15px] leading-[38px] font-Lora font-normal uppercase opacity-0 pb-[20px]"
              >
                {" "}
                See more tour <HiOutlineArrowNarrowRight className="ml-2" />{" "}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
