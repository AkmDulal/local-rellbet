/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const BigWin = ({ data }: any) => {
  const displayData = [...data, ...data?.slice(0, 8)];

  return (
    <div className="px-2 pt-6 text-white w-full">
      <div className="flex items-center mb-2">
        <span className="h-3 w-3 bg-green-500 rounded-full mr-3"></span>
        <h2 className="text-xl font-bold">Recent Big Wins</h2>
      </div>
      <Marquee pauseOnHover speed={50}>
        {displayData?.map((item, index) => (
          <div
            key={index}
            className="mx-1 transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={item.images}
              width={60}
              height={100}
              alt="Big win"
              className="rounded-lg"
            />
            <div className="">
              <p className="mt-1 text-xs font-semibold  truncate  flex item-center gap-1">
                <Image
                  src={item.icon}
                  width={17}
                  height={16}
                  alt="Big win ii"
                  loading="lazy"
                  className="rounded-lg object-cover"
                  quality={80}
                />
                {item?.title}{" "}
              </p>
            </div>
            <p className="text-green-400 font-semibold truncate text-[clamp(10px,2.4vw,12px)]">
              {" "}
              {item?.price}{" "}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BigWin;
