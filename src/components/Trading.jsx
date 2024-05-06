import React from "react";
import signupimg from "../assets/image/signup-img1.webp";
import Palantir from "../assets/image/Palantir-img.webp";
import UiPath from "../assets/image/UiPath-img.webp";
import Amazon from "../assets/image/Amazon-img.webp";
import Nvidia from "../assets/image/Nvidia_img.webp";
import vlpa from "../assets/image/vlpa-img.webp";

const Trading = () => {
  return (
    <>
      <section className=" pt-80 pb-64">
        <div className=" container mx-auto px-3 ">
          <h2 className="text-[40px] leading-[50px] text-center font-bold text-white font-Montserrat">
            Take the first step into{" "}
            <span className=" block">AI Stock Trading</span>
          </h2>
          <p className=" font-Montserrat font-normal text-base text-[#D1D0D1] text-center">
            In a matter of minutes, one of our AI mentors will contact you, No{" "}
            <span className=" block">Experience Required!</span>
          </p>
          <div className="grid xl:grid-cols-2 grid-cols-1 pt-24">
            <div className=" w-[461px] rounded-[16px] border py-[30px] px-[20px] bg-[#242127] relative overflow-hidden">
                <div className=" w-[56px] h-[56px] bg-CommonGradient absolute"></div>
              <p className=" font-Montserrat font-bold text-[20px] max-w-[337px] leading-[30px] text-white">
                This Is The Right Time to Invest In AI Stocks
              </p>
              <p className=" font-Montserrat font-normal text-base max-w-[363px] text-[#FDFAFF] pt-[14px]">
                In a matter of minutes, one of our AI mentors will contact you,
                No Experience Required!
              </p>
              <input
                className=" mt-[30px] w-full text-[#FEFCFF] hover:border-[#6E5625] hover:duration-300 duration-300 bg-[#2F2C32] px-[30px] py-[13px] max-w-[421px] rounded-[81px] border outline-none border-[#6E6A6F]"
                type="First Name"
                placeholder="First Name"
              />
              <input
                className=" mt-[30px] w-full text-[#FEFCFF] hover:border-[#6E5625] hover:duration-300 duration-300 bg-[#2F2C32] px-[30px] py-[13px] max-w-[421px] rounded-[81px] border outline-none border-[#6E6A6F]"
                type="Last name"
                placeholder="Last name"
              />
              <input
                className=" mt-[30px] w-full text-[#FEFCFF] hover:border-[#6E5625] hover:duration-300 duration-300 bg-[#2F2C32] px-[30px] py-[13px] max-w-[421px] rounded-[81px] border outline-none border-[#6E6A6F]"
                type="E-mail"
                placeholder="E-mail"
              />
              <input
                className=" mt-[30px] w-full text-[#FEFCFF] hover:border-[#6E5625] hover:duration-300 duration-300 bg-[#2F2C32] px-[30px] py-[13px] max-w-[421px] rounded-[81px] border outline-none border-[#6E6A6F]"
                type="Number"
                placeholder="Phone Number"
              />
              <button className=" text-white py-[13px] px-[117px] rounded-[87px] font-Montserrat font-bold text-base  w-full mt-3 bg-black text-center">Sign Up</button>
              <p className=" font-Montserrat font-normal text-base text-white text-center pt-[20px]">1 Spot Left</p>
            </div>
            <div className=" relative">
             <div className=" w-[224px] absolute left-[-19%] h-[224px] bg-white rounded-full flex justify-center items-center">
                <img className=" w-[129px] h-[129px]" src={signupimg} alt="signupimg" />
             </div>
             <div className=" w-[164px] absolute left-[25%] top-[-4%] h-[164px] bg-white rounded-full flex justify-center items-center">
                <img className=" w-[121px] h-[30px]" src={Palantir} alt="signupimg" />
             </div>
             <div className=" w-[220px] absolute right-[17%] top-[19%] h-[220px] bg-white rounded-full flex justify-center items-center">
                <img className=" w-[154px] h-[54px]" src={UiPath} alt="signupimg" />
             </div>
             <div className=" w-[146px] absolute right-[61%] top-[31%] h-[146px] bg-white rounded-full flex justify-center items-center">
                <img className=" w-[90px] h-[55px]" src={Amazon} alt="Amazon" />
             </div>
             <div className=" w-[263px] absolute left-[-22%] top-[54%] h-[263px] bg-white rounded-full flex justify-center items-center">
                <img className=" w-[133px] h-[98px]" src={Nvidia} alt="Amazon" />
             </div>
             <div className=" w-[173px] absolute right-[37%] bottom-[6%] h-[173px] bg-white rounded-full flex justify-center items-center">
                <img className=" w-[130px] h-[41px]" src={vlpa} alt="Amazon" />
             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trading;
