import React from "react";
import Image from "next/image";

interface JoinDataItem {
  id: string;
  title: string;
  sortTitle: string;
  details: string;
  buttonText: string;
  images: string;
}

function JoinCard({ data }: { data: JoinDataItem }) {
  return (
    <div className="relative overflow-hidden rounded ">
      <div className="flex gap-2 xs:gap-2.5 sm:gap-3 transition-transform duration-500 ease-in-out">
        <div className="w-full shrink-0 bg-brand-secondary px-3 xs:px-4 sm:px-4 pt-2.5 pb-3 xs:pb-4 sm:pb-4 flex items-start justify-between gap-1 xs:gap-2 sm:gap-2 rounded min-h-[140px] xs:min-h-[150px] sm:min-h-40">
          <div className="text-white flex flex-col flex-1 justify-between h-full">
            <div className="flex flex-col">
              <p className="text-[#E2E5E7] bg-[#2F4553] p-1 px-1.5 text-nowrap rounded-sm text-xs xs:text-[13px] sm:text-[15px] font-semibold max-w-[90px] xs:max-w-[100px] sm:max-w-[110px]">
                {data.title}
              </p>

              <p className="font-semibold text-base xs:text-sm sm:text-[15px] mt-2 xs:mt-3 sm:mt-[15px] text-[#E2E5E7] text-nowrap">
                {data.sortTitle}
              </p>

              <p className="text-[#9EA9C0] max-w-[160px] text-sm xs:text-sm sm:text-sm leading-4 xs:leading-5 sm:leading-[22px] mt-1 xs:mt-2">
                {data.details}
              </p>
            </div>
            <button className="border border-[#FFFFFF] text-white py-1.5 xs:py-2 sm:py-2 px-2 xs:px-3 sm:px-4 max-w-[90px] xs:max-w-[110px] sm:max-w-[120px] rounded text-xs xs:text-sm sm:text-sm mt-2 xs:mt-3 sm:mt-[18px] self-start">
              {data.buttonText}
            </button>
          </div>
          <div className="w-[100px] xs:w-[100px] sm:w-[120px] h-[120px] xs:h-[130px] sm:h-[150px] shrink-0">
            <Image
              src={data.images}
              width={120}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinCard;