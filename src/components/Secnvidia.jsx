import React from "react";
import nvidia from "../assets/image/logo-img.webp";

const Secnvidia = () => {
  return (
    <>
      <section className=" pt-36">
        <div className=" container mx-auto px-3">
          <h2 className=" font-Montserrat font-bold text-[40px] leading-[60px] text-white text-center pb-10">
            Top 7 AI Stocks 
          </h2>
          <div className=" grid lg:grid-cols-2 grid-cols-1 items-center pt-14">
            <div className=" flex justify-around flex-col">
              <h2 className="font-Montserrat font-bold text-[32px] leading-[48px] text-white max-lg:text-center ">
                <span className=" block">Nvidia - AI GPU</span> 1 year 228% Growth
              </h2>
              <p className=" font-Montserrat font-normal text-base text-[#D3D0D5] max-w-[557px] max-lg:text-center max-lg:mx-auto">
                NVIDIA Corporation, a powerhouse in GPU technology and AI
                innovation, offers investors compelling opportunities. With
                dominance in gaming and data center markets, NVIDIA stands poised
                for growth. Diversification efforts into AI, autonomous vehicles,
                and strategic acquisitions further bolster its potential. As a
                leader in technology and with a strong financial track record,
                NVIDIA remains a top choice for savvy investors.
              </p>
            </div>
            <div className=" h-[461px] border-[2px] bg-[#242127] shadow-[#725286] border-[#725286] flex justify-center items-center rounded-[16px] lg:max-w-[461px]">
               <img className=" w-full max-w-[288px] h-[212px]" src={nvidia} alt="nvidia" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Secnvidia;
