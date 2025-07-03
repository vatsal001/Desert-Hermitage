import { Link } from "react-router-dom";

const Agency = () => {
  return (
    <section className="py-20 2xl:py-[115px] dark:bg-lightBlack">
      <div className="Container grid  grid-cols-1 md:grid-cols-2 gap-[30px] ">
        {/* 1st col */}
        <div>
          <div data-aos="fade-down" data-aos-duration="1000">
            <p className="pt-1 text-base md:text-lg leading-[28px] text-khaki dark:text-khaki flex items-center font-medium font-Garamond ">
              <span className="w-[60px] h-[1px] inline-block text-khaki bg-khaki mr-2 "></span>
              EXCLUSIVE RESORT EXPERIENCE
            </p>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[46px]  text-lightBlack dark:text-white mt-2 md:mt-[10px]  mb-[12px] lg:mb-5 xl:mb-[23px] font-Garamond font-bold">
              Let the silence speak to you. Let the desert change you.
            </h1>
            <p className=" text-sm sm:text-base font-Lora leading-[26px] text-gray dark:text-lightGray font-normal">
              Step away from the noise and into the stillness of the desert. At
              Desert Hermitage, we don’t just offer accommodation — we offer a
              pause. A sacred space where golden dunes stretch endlessly, skies
              glow with a million stars, and the air feels like it has waited
              for you for centuries. Whether you’re seeking solitude, adventure,
              healing, or creativity, this is where your journey begins.
            </p>
          </div>
          <div
            className="mt-8 lg:mt-[54px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/images/all/DSC_9498.jpg" alt="" />
          </div>
        </div>
        {/* 2nd col */}
        <div>
          <div className="" data-aos="fade-up" data-aos-duration="1000">
            <img src="/images/all/IMG_7587.jpg" alt="" />
          </div>
          <div
            className="mt-8 lg:mt-[50px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className=" text-sm sm:text-base font-Lora leading-[26px] text-gray dark:text-lightGray font-normal">
              Located in the heart of rural Rajasthan, far from tourist crowds
              Built with sustainability and local craftsmanship in mind Loved by
              solo travelers, artists, couples & nature seekers Operated with
              heart, history, and hospitality
            </p>
            <Link to={"/contact"}>
              <button className="btn-primary mt-[25px]">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
