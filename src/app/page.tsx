import React from "react";
import Image from "next/image";
import logo from "../app/public/logo.png";
import urity from "../app/public/urity.png";
import Frame from "../app/public/Frame.png";
import pic from "../app/public/pic.png";
import searchbar from "../app/public/searchbar.png";
const page = () => {
  return (
    <div>
      {/*outer container*/}
      <div className=" w-[1600px] h-[1200px] top-[-4125px] left-[-776px] p-[120px_57px_119.43px_57px] bg-[#FFF8F8]">
        {/*header div*/}
        <div className="w-[1486px] h-[135.01px] left-[-127.27px] bg-[#A29875] flex items-center pl-[56.76px] ">
          <div
            className="ml-[400px]
             w-[769.89px] h-[56.24px] top-[39.56px] left-[431.7px] rounded-[13.83px] bg-white flex items-center justify-center"
          >
            <p className="text-slate-600 absolute left-[540px]">
              Search for Gold Jewellery,Diamond Jewellery and More ...
            </p>
            {/* Search bar logo  */}
            <div className=" absolute left-[1245px] ">
              <Image src={searchbar} alt="" height={21.5} width={21.5} />
            </div>
            {/* corner mai heart shopping card k logo ha  */}
            <div className=" absolute left-[1330.81px] w-[177.8px] h-[30.08px] top-[175px] gap-[38.7px]">
              <Image src={Frame} alt="logo" width={177.8} height={30.08} />
            </div>
          </div>
          {/*LOGO lagaya ha */}
          <div className="absolute left-[140px] top-[140px]">
            <Image src={logo} alt="font" width={63.52} height={90.66} />
          </div>
          <div className="absolute left-[210px] ">
            <Image src={urity} alt="font" width={174} height={83} />
            {/*Logo yaha tk ha */}
          </div>
        </div>

        {/*innner div*/}
        <div
          className="absolute w-[1486px] h-[960.57px] top-[120px] left-[57px]  shadow-[0_15px_30px_rgba(0,0,0,0.6)]
        "
        >
          {/*ya font or pic k liy div ha  */}
          <span className="absolute w-[1271.01px] h-[590.59px] top-[300.98px] left-[107.49px]  opacity-100">
            <h1 className="font-bold text-[37.84px] leading-[62.24px] tracking-[0.025em] text-left">
              IMPECCABLE <br />
              CRAFTSMANSHIP AND <br />
              FINESSE
            </h1>
          </span>
          <div className=" absolute w-[798.9px] h-[144px] top-[523.71px] left-[107.49px] gap-0 opacity-100 ">
            <p className="font-medium text-[29.24px] leading-[48.1px] tracking-[0.025rem] text-left text-[#787054]">
              An example of intricate workmanship and detail, elegant necklaces
              and long and short chains form a part of our desirable collection.
            </p>
          </div>
        </div>
        {/*ya picture k liy ha  */}
        <div className="absolute w-[380.1px] h-[525.43px] top-[350px] left-[1090.77px] gap-0 rounded-[128.99px_0_128.99px_0] border-[0.86px_0_0_0] opacity-100">
          <Image src={pic} alt="pic" width={421.38} height={573.59} />
        </div>
        {/*frame k liy ha  */}
        <div className="absolute w-[330px] h-[470px] top-[370px] left-[1110px] gap-0 rounded-[128.99px_0_128.99px_0] border-[0.86px] border-solid border-white  "></div>

        {/*ya button l liy ha  */}
        <div className="absolute w-[228.67px] h-[49.2px] top-[820.32px] left-[165.49px] pt-[8.6px] pt-[8.6px] rounded-[13.83px] opacity-100 bg-[#A29875]">
          <h1 className=" text-[25.8px] leading-[25.1px] tracking-[0.050rem] text-center text-white">
            {" "}
            Explore More{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
