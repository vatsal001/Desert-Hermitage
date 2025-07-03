import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
  });

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
            Do everything. Or nothing at all
          </h4>
          <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-7 md:leading-8 lg:leading-9 xl:leading-10 2xl:leading-[44px] text-lightBlack dark:text-white mt-2 md:mt-[10px]  mb-[12px]  font-bold">
            Our Experiences & Activities
          </h1>
          <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
            At Desert Hermitage, there are no schedules — just soulful
            invitations to connect, explore, or simply be.
          </p>
        </div>
        {/* section content */}
        <div className="mt-14 2xl:mt-[60px]  ">
          <div ref={sliderRef} className="keen-slider relative">
            {/* Room - one */}

            <div className="keen-slider__slide number-slide1">
              <div
                className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/all/camel safari.jpg"
                  alt=""
                  className="z-[-1]  h-full opacity-0 2xl:opacity-100 lg:h-[490px] xl:h-[575px] 2xl:h-[600px] 3xl:h-[605px]"
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] xl:right-[-25px] 2xl:right-[-1px] 3xl:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/all/camel safari.jpg"
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">
                        <Link to="/room"> 🐪 Camel Rides at Sunset </Link>
                      </h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-1">
                        Sway across golden dunes in the footsteps of history.
                      </p>
                    </div>
                    {/* <div className="mt-3 ">
                      <ul className="font-Lora text-sm sm:text-[15px] font-normal leading-6 md:leading-7 lg:leading-8 xl:leading-[38px]">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray mt-2">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-2">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Rome two */}

            <div className="keen-slider__slide number-slide1">
              <div
                className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-2/box-shape.png"
                  alt=""
                  className="z-[-1]  h-full opacity-0 2xl:opacity-100 lg:h-[490px] xl:h-[575px] 2xl:h-[600px] 3xl:h-[605px]"
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] xl:right-[-25px] 2xl:right-[-1px] 3xl:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/all/jeep safari.jpg"
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">
                        <Link to="/room"> 🚙 Jeep Safari </Link>
                      </h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-1">
                        Go deep into the desert with local guides and raw
                        adventure.
                      </p>
                    </div>
                    {/* <div className="mt-3 ">
                      <ul className="font-Lora text-sm sm:text-[15px] font-normal leading-6 md:leading-7 lg:leading-8 xl:leading-[38px]">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray mt-2">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-2">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Rome three */}

            <div className="keen-slider__slide number-slide1">
              <div
                className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/all/DSC_9498.jpg"
                  alt=""
                  className="z-[-1]  h-full opacity-0 2xl:opacity-100 lg:h-[490px] xl:h-[575px] 2xl:h-[600px] 3xl:h-[605px]"
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] xl:right-[-25px] 2xl:right-[-1px] 3xl:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/all/DSC_9498.jpg"
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">
                        <Link to="/room"> 🌅 Sunset Walks </Link>
                      </h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-1">
                        Silent walks into vastness — where the desert speaks
                        without words.
                      </p>
                    </div>
                    {/* <div className="mt-3 ">
                      <ul className="font-Lora text-sm sm:text-[15px] font-normal leading-6 md:leading-7 lg:leading-8 xl:leading-[38px]">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray mt-2">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-2">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Rome four */}

            <div className="keen-slider__slide number-slide1">
              <div
                className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/all/k 32479.jpg"
                  alt=""
                  className="z-[-1]  h-full opacity-0 2xl:opacity-100 lg:h-[490px] xl:h-[575px] 2xl:h-[600px] 3xl:h-[605px]"
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] xl:right-[-25px] 2xl:right-[-1px] 3xl:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/all/k 32479.jpg"
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">
                        <Link to="/room"> 🎶 Folk Music Nights </Link>
                      </h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-1">
                        Evenings around the fire with live Rajasthani music and
                        dance.
                      </p>
                    </div>
                    {/* <div className="mt-3 ">
                      <ul className="font-Lora text-sm sm:text-[15px] font-normal leading-6 md:leading-7 lg:leading-8 xl:leading-[38px]">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray mt-2">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-2">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Rome five */}

            <div className="keen-slider__slide number-slide1">
              <div
                className="lg:relative  pt-10 xsm:pb-12 sm:pb-16 md:pb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/all/k 31513.jpg"
                  alt=""
                  className="z-[-1]  h-full opacity-0 2xl:opacity-100 lg:h-[490px] xl:h-[575px] 2xl:h-[600px] 3xl:h-[605px]"
                />
                <div className=" 3xl:w-[410px] group absolute top-[10px] xl:right-[-25px] 2xl:right-[-1px] 3xl:right-[-10px]">
                  <div className="relative ">
                    <img
                      src="/images/all/k 31513.jpg"
                      className="w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond bg-white dark:bg-lightBlack p-[35px] leading-[38px] text-lightBlack dark:text-white font-bold">
                    <div>
                      <h3 className="text-2xl lg:text-[28px] ">
                        <Link to="/room"> 🧘 Yoga & Meditation </Link>
                      </h3>
                      <p className="text-base md:text-[17px] leading-[38px] text-gray dark:text-lightGray font-Lora font-normal mt-1">
                        Rooftop and open-air spaces for sunrise yoga and moonlit
                        mindfulness.
                      </p>
                    </div>
                    {/* <div className="mt-3 ">
                      <ul className="font-Lora text-sm sm:text-[15px] font-normal leading-6 md:leading-7 lg:leading-8 xl:leading-[38px]">
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray">
                          Status<span>Rent</span>
                        </li>
                        <li className="flex items-center justify-between pb-2 border-b-[1px] border-[#cfcfcf] dark:border-[#323232] text-gray dark:text-lightGray mt-2">
                          Area<span>58 Sq. Ft.</span>
                        </li>
                        <li className="flex items-center justify-between  text-gray dark:text-lightGray mt-2">
                          Type<span>Apartment</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
