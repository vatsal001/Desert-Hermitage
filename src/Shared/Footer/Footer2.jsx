import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="lg:pt-[100px]  dark:bg-lightBlack ">
      <div className=" py-20 2xl:py-[120px]">
        <div className="Container grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-12 2xl:grid-cols-10  justify-between gap-5 px-2">
          {/* logo and text */}
          <div
            className="px-5 lg:px-2 lg:col-span-3 2xl:col-span-4  "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              style={{ width: "60%", margin: "auto" }}
              src="/images/all/logo.png"
              className="dark:hidden"
              alt=""
            />
            <img
              style={{ width: "60%", margin: "auto" }}
              src="/images/all/logo.png"
              className="hidden dark:block"
              alt=""
            />
            <p
              style={{
                textAlign: "center",
                alignItems: "center",
                width: "100%",
              }}
              className="text-sm xl:text-base leading-[26px] font-Lora font-normal text-gray dark:text-lightGray mt-6 lg:mt-[35px] 2xl:w-[345px]"
            >
              Show beauty your location, showse design your rooms, present the
              facities an todays features of your hotel and offer tos recove
              method to book a room.
            </p>
          </div>
          {/* contact info */}
          <div
            className="px-5 lg:px-2 lg:col-span-2 2xl:col-span-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-4 md:pb-5  text-lightBlack dark:text-white">
              CONTACT US
            </h4>
            <ul className="">
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                contact@deserthermitage.in
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                Village Garha, Tehsil Shergarh, District Jodhpur – Near
                Jaisalmer, Rajasthan, India
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                +91 96725 79662
              </li>
            </ul>
          </div>
          {/* information*/}
          <div
            className="px-5 lg:px-2 lg:col-span-2 2xl:col-span-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-lg leading-[46px] font-Garamond font-bold text pb-4 md:pb-5  text-lightBlack dark:text-white">
              Quick Links
            </h4>
            <ul className="">
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="/"> Home</Link>
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="/about"> About</Link>
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="/room"> Accomodations</Link>
              </li>
              <li className="text-gray dark:text-lightGray font-normal font-Lora text-sm xl:text-base mb-[15px] hover:text-khaki transition-all duration-300">
                <Link to="/contact"> Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* gallery*/}
        </div>
      </div>
      {/* bottom footer */}

      <div className="bg-whiteSmoke dark:bg-normalBlack py-7">
        <div className="Container flex flex-col sm:flex-row items-center justify-between">
          <p
            className="text-sm xl:text-base text-gray dark:text-lightGray
           font-Lora font-normal"
          >
            {` © ${new Date().getFullYear()} Desert Hermitage. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
