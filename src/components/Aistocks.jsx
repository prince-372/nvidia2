import React from "react";
import mobile from "../assets/image/mobile-img.webp";
import { Bag, Clock, Elictric, Hand } from "./Icons";

const myarray = [
  {
    Img: <Clock/>,
    heading: "Artificial Intelligence Stocks",
    pera: "As per our research and data evaluation from experts, the price of these AI Stocks will rise over time. Today's Investment can give a return of more than 130.66% in 2024.",
  },
  {
    margin: "mt-[24px]",
    Img: <Bag/>,
    heading: "Artificial Intelligence Stocks",
    pera: "As per our research and data evaluation from experts, the price of these AI Stocks will rise over time. Today's Investment can give a return of more than 130.66% in 2024.",
  },
];
const myarray2 = [
    {
      margin: "mt-[160px]",
      Img: <Hand/>,
      heading: "Artificial Intelligence Stocks",
      pera: "As per our research and data evaluation from experts, the price of these AI Stocks will rise over time. Today's Investment can give a return of more than 130.66% in 2024.",
    },
    {
        margin: "mt-[24px]",
      Img: <Elictric/>,
      heading: "Artificial Intelligence Stocks",
      pera: "As per our research and data evaluation from experts, the price of these AI Stocks will rise over time. Today's Investment can give a return of more than 130.66% in 2024.",
    },
  ];

const Aistocks = () => {
    const cardcomponent = myarray.map((myarray) => (
      <div
        className={` ${myarray.margin} w-[364px] rounded-[16px] border p-[20px]  border-[#666468]`}
      >
        <div>{myarray.Img}</div>
        <p className=" font-Montserrat font-bold text-[20px] leading-[30px] text-white pt-[20px]">
          {myarray.heading}
        </p>
        <p className=" font-Montserrat font-normal text-base text-[#D6D3D8] pt-2 pb-3">
          {myarray.pera}
        </p>
      </div>
    ));
    const cardcomponent2 = myarray2.map((myarray2) => (
      <div
        className={` ${myarray2.margin} max-lg:w-[364px] rounded-[16px] border p-[20px]  border-[#666468]`}
      >
        <div>{myarray2.Img}</div>
        <p className=" font-Montserrat font-bold text-[20px] leading-[30px] text-white pt-[20px]">
          {myarray2.heading}
        </p>
        <p className=" font-Montserrat font-normal text-base text-[#D6D3D8] pt-2 pb-3">
          {myarray2.pera}
        </p>
      </div>
    ));
    return (
    <>
      <section className=" pt-52" >
        <div className=" container mx-auto px-3">
          <h1 className=" text-[40px] leading-[60px] mx-auto text-center max-w-[646px] font-bold text-white font-Montserrat">
            How to Benefit By Investing In AI Stocks For High Returns
          </h1>
          <p className=" font-Montserrat font-normal text-base text-center max-w-[558px] mx-auto text-[#D3D0D4] pt-3">
            Major AI Stocks such as Microsoft and Nvidia have surged over 80% in
            the past year. This giants are expected to grow 130.66% in 2024
          </p>
          {/* <div className=" w-[679px] h-[679px] opacity-[20%] bg-CommonGradient "></div> */}
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12">
            <div>{cardcomponent}</div>
            <img className=" pt-16" src={mobile} alt="mobile" />
            <div>{cardcomponent2}</div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Aistocks;
