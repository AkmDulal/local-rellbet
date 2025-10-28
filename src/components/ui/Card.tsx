/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
function Card({ data }: any) {
  return (
    <div>
      <div className="relative w-full aspect-4/5 overflow-hidden  cursor-pointer">
        <Image
          src={data?.images}
          width={200}
          height={100}
          alt="Big win ii"
          loading="lazy"
          className="rounded-lg w-full object-cover"
          quality={80}
        />
      </div>
         <p className="text-[clamp(14px,2.4vw,16px)] flex items-center mt-2">
        <span
          className="h-2 w-2 bg-green-500 rounded-full mr-3"
        ></span>
        2,110 <span className="text-[#00F480] ml-1 ">Playing</span>
      </p>
    </div>
  );
}

export default Card;
