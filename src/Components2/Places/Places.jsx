import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
import ImageSlider from "../../Pages/Home2/ImageSlider";
const Places = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="py-20 2xl:py-[120px] dark:bg-lightBlack">
      <div className="Container" data-aos="fade-up" data-aos-duration="1000">
        {/* section heading */}
        <div className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[280px] font-Garamond">
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white mb-[12px] font-bold">
            Desert Hermitage Is Waiting For You!
          </h1>
          <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base mb-[35px]">
            A Soulful Escape into the Serenity of the Thar Desert
          </p>
          <Link to={"/services"}>
            <button className="btn-primary 2xl:w-[200px]">
              Explore Accomodations
            </button>
          </Link>
        </div>
      </div>
      {/* section Content */}
      <div className="mt-14 2xl:mt-[60px]">
        <ImageSlider />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-5 ">
          <div
            className="overflow-hidden relative group cursor-grab"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/all/IMG_7587.jpg"
              className="transition-all duration-500 hover:scale-[1.08]"
              alt=""
            />
            <span
              className="w-[55px] h-[55px] rounded-full  bg-white absolute top-1/2 group-hover:top-[45%] transition-all duration-300 right-[43%] grid items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => setToggler(!toggler)}
            >
              <BiLink className="text-khaki" size={24} />
            </span>
          </div>
          <div
            className="overflow-hidden relative group cursor-grab"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/all/IMG_7588.jpg"
              className="transition-all duration-500 hover:scale-[1.08]"
              alt=""
            />
            <span
              className="w-[55px] h-[55px] rounded-full bg-white absolute top-1/2 group-hover:top-[45%] transition-all duration-300 right-[43%] grid items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => setToggler(!toggler)}
            >
              <BiLink className="text-khaki" size={24} />
            </span>
          </div>
          <div
            className="overflow-hidden relative group cursor-grab"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/all/IMG_7589.jpg"
              className="transition-all duration-500 hover:scale-[1.08]"
              alt=""
            />
            <span
              className="w-[55px] h-[55px] rounded-full bg-white absolute top-1/2 group-hover:top-[45%] transition-all duration-300 right-[43%] grid items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => setToggler(!toggler)}
            >
              <BiLink className="text-khaki" size={24} />
            </span>
          </div>
          <FsLightbox
            toggler={toggler}
            sources={[
              "/images/home-2/places-1.png",
              "/images/home-2/places-2.png",
              "/images/home-2/places-3.png",
            ]}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Places;
