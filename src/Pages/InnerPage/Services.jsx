import { HiArrowLongRight } from "react-icons/hi2";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="">
      <BreadCrumb title="Experiences & Activities" />

      {/* service page content */}
      <div className="dark:bg-mediumBlack ">
        <section className="Container py-[120px] md:py-0 md:pb-[120px] lg:py-[120px]">
          {/* section title and button */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" md:w-[750px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]  ">
                Experiences & Activities
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px]  text-lightBlack dark:text-white font-semibold ">
                Enjoy Excellent quality of activity experiences with Desert
                Hermitage
              </h1>
              <p className="text-sm font-normal text-dark  dark:text-lightGray font-Lora">
                At Desert Hermitage, each day offers a new rhythm — or none at
                all. Whether you want to fill your hours with desert adventures
                or simply lie in silence under the sun, the choice is yours.
                There’s no itinerary here, only invitation. Our experiences are
                curated to reflect the culture, calm, and charm of the Thar
                Desert. Choose what speaks to you.
              </p>
            </div>
            <div className="mt-5 md:mt-0">
              <Link to="tel:+919672579662">
                <button className="btn-items">Contact Us</button>
              </Link>
            </div>
          </div>
          {/* facilities container */}
          <div className="">
            {/* facilities section -1  */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/all/camel safari.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className=" hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    01
                  </h2>
                </div>
              </div>
              <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  Fun
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact">🐪 Camel Ride</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                  Glide gently across the dunes just as desert dwellers have for
                  centuries. Perfectly timed for sunset, this slow, swaying
                  journey brings you face to face with the vastness of the Thar.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    size={30}
                    className="text-gray hover:text-khaki"
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 2 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  Fun
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact"> 🚙 Jeep Safari</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  For thrill-seekers, hop in a 4x4 and ride into remote parts of
                  the desert. Led by local drivers who know the land like
                  family, this off-road adventure combines adrenaline with
                  storytelling.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%] md:pl-[30px] relative mt-5 md:mt-0">
                <img
                  src="/images/all/jeep safari3.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    02
                  </h1>
                </div>
              </div>
            </div>
            {/* facilities section - 3 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/all/DSC_9498.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    03
                  </h2>
                </div>
              </div>
              <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  Fitness
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact">🌅 Sunset Walks</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Sometimes the simplest moments are the most powerful. Take a
                  silent walk into the horizon, where golden light kisses every
                  grain of sand and stillness becomes a friend.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 4 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  Music & Chill
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact">🎶 Folk Nights</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Gather around the bonfire for an evening of live Rajasthani
                  music, dance, and oral folklore. Performed by local artists,
                  these evenings are full of rhythm, emotion, and authentic
                  culture.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%]  relative md:pl-[30px] mt-5 md:mt-0">
                <img
                  src="/images/all/IMG_7588.jpg"
                  alt=""
                  className="w-full h-full "
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    04
                  </h1>
                </div>
              </div>
            </div>

            {/* facilities section - 3 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/all/silhouette-woman-practicing-ballet-desert-against-sky-sunset.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    05
                  </h2>
                </div>
              </div>
              <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  Fitness
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact">🧘 Yoga & Meditation</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Whether you're a beginner or experienced practitioner, our
                  rooftop and open-air spaces are perfect for sunrise yoga or
                  evening meditations beneath a limitless sky.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* service page content */}
      <div className="dark:bg-mediumBlack ">
        <section className="Container py-[120px] md:py-0 md:pb-[120px] lg:py-[120px]">
          {/* section title and button */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" md:w-[750px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]  ">
                Some of the additional experiences & Activities at Desert
                Hermitage
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px]  text-lightBlack dark:text-white font-semibold ">
                Optional Add-Ons (Available on Request):
              </h1>
              <p className="text-sm font-normal text-dark  dark:text-lightGray font-Lora">
                At Desert Hermitage, Upon request we will quicky provide
                additional experiences and Activities for our guests and We will
                also make sure to make them feel good while they are on their
                Vacation/Trips.
              </p>
            </div>
            <div className="mt-5 md:mt-0">
              <Link to="tel:+919672579662">
                <button className="btn-items">Contact Us</button>
              </Link>
            </div>
          </div>
          {/* facilities container */}
          <div className="">
            {/* facilities section -1  */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/all/pexels-leofallflat-1567069.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className=" hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    01
                  </h2>
                </div>
              </div>
              <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  Knowledge
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact">🔭 Stargazing with Telescope</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                  The desert sky is free of light pollution, offering
                  crystal-clear views of constellations, planets, and shooting
                  stars. A telescope and guide can be arranged for celestial
                  evenings.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    size={30}
                    className="text-gray hover:text-khaki"
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 2 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  Fun & Food
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact"> 🍽️ Private Desert Dinner Setup</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Dine on the dunes surrounded by candles, cushions, and
                  traditional hospitality. A surreal and private experience
                  that’s perfect for celebrations or romantic evenings.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%] md:pl-[30px] relative mt-5 md:mt-0">
                <img
                  src="/images/all/dune dinner final.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    02
                  </h1>
                </div>
              </div>
            </div>
            {/* facilities section - 3 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/all/pexels-aarti-krishnan-365176-984514.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    03
                  </h2>
                </div>
              </div>
              <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                  Cooking
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact">🍳 Local Cooking Experience</Link>
                </h1>

                <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Learn how to prepare traditional desert dishes like bajra
                  khichdi or ker sangri from our kitchen team. Understand the
                  role of spice, technique, and heart in rural cooking.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 4 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                  Art & Craft
                </h4>
                <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="/contact">🎨 Cultural Craft Workshop</Link>
                </h1>

                <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                  Try your hand at pottery, block printing, or basket weaving
                  with the artisans of Garha. Take home not just a souvenir, but
                  a skill.
                </p>
                <Link to="/contact">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%]  relative md:pl-[30px] mt-5 md:mt-0">
                <img
                  src="/images/all/pexels-tasveere-byqusai-297995514-14897206.jpg"
                  alt=""
                  className="w-full h-full "
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    04
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
