import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { BsTwitter } from "react-icons/bs";

const Team = () => {
  return (
    <div>
      <BreadCrumb title="Desert Hermitage Gallery" />
      {/* Content */}

      {/* Expert Members */}
      <div className="dark:bg-normalBlack py-20 2xl:py-[120px]">
        <div className="Container">
          <div className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container">
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/all/logo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              A visual journey into the soul of the desert
            </h1>
            <p className="font-Lora leading-7 lg:leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              Our gallery isn’t just a collection of images — it’s a window into
              moments of calm, culture, and connection. Every photograph
              captures the golden rhythm of life at Desert Hermitage — from
              quiet dawns to music-filled nights. Whether you're reminiscing or
              planning your stay, these visuals are meant to stir your senses.
            </p>
          </div>

          {/* Section Content */}
          <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[30px] ">
            {/* Member one */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/all/Villa corridor night.jpg"
                className="w-full"
                alt=""
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    🏠 Our Cottages
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    Get a glimpse of our handcrafted mud cottages and stone
                    villas — cozy, earthy, and architecturally rooted in
                    Rajasthani tradition. Exterior shots with dunes, and
                    interior shots during golden hour.
                  </p>
                </div>
                {/* <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    example@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
            {/* Member two */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img src="/images/all/k 31564.jpg" className="w-full" alt="" />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    🏜️ The Desert Landscape
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    From endless dunes and thorny shrubs to dramatic sunsets and
                    cloudless skies, this section showcases the raw beauty of
                    the Thar. Drone shots, camel silhouettes, and sand textures
                    bring the terrain alive.
                  </p>
                </div>
                {/* <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    example@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
            {/* Member three */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/all/Villa sitout front.jpg"
                className="w-full"
                alt=""
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    🧑‍🤝‍🧑 Guests & Gatherings
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    Smiles, slow mornings, chai conversations, and shared meals.
                    These candid images celebrate connection — solo travelers
                    journaling, couples watching sunsets, and groups around a
                    fire.
                  </p>
                </div>
                {/* <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    example@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
            {/* Member four */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/all/Villa corridor day2.jpg"
                className="w-full"
                alt=""
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    🎶 Folk Nights & Cultural Performances
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    Local musicians, dancers in motion, colorful costumes, and
                    glowing lanterns. This category captures the heartbeat of
                    Rajasthan — its music, movement, and joy.
                  </p>
                </div>
                {/* <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    example@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
            {/* Member five */}
            <div
              className="member group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/all/pexels-leofallflat-1567069.jpg"
                className="w-full"
                alt=""
              />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    🌌 Dining Under the Stars
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    ⦁ Dinners on dunes with candles and cushions. Tables set in
                    the middle of nowhere. Moments where food, silence, and
                    stars meet. The most Instagram-worthy and soul-touching part
                    of your journey.
                  </p>
                </div>
                {/* <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                 duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    example@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <img src="/images/"/>
      </div>
    </div>
  );
};

export default Team;
