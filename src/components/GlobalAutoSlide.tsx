/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const GlobalAutoSlide = ({ data }: any) => {
  console.log(data, "datadatadatadatadatadatadatadata");

  return (
    <div className="w-full">
      <Marquee pauseOnHover speed={50}>
        {data.map((item: any) => (
          <div key={item.id} className="mx-4">
            <Image
              src={item.images}
              width={120}
              height={100}
              alt="Picture of the author"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default GlobalAutoSlide;
