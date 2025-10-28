/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function FullwidthCard({ data }: any) {
  return (
    <div>
      <div className='class="container bg-brand-secondary text-slate-100 rounded p-3 px-2 shadow-md ring-1 ring-white/5 '>
        <div className="flex items-start justify-between gap-1.5">
          <div className="flex items-center gap-2">
            <Image
              src="/images/asio-cup-logo.png"
              width={24}
              height={24}
              alt="Big win ii"
              loading="lazy"
              className="rounded-lg object-cover"
              quality={80}
            />
            <div className="text-xs font-semibold leading-4 truncate">
              {" "}
              Asia Cup. Group B{" "}
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <button className="w-6 h-6 cursor-pointer rounded-full bg-[#1A2C38] flex items-center justify-center shadow-md hover:bg-[#243441] active:bg-[#152028] transition-colors duration-200">
              {" "}
              <FaPlay size={10} className="text-[#00F480]" />{" "}
            </button>
            <div className="w-6 h-6 cursor-pointer rounded-full bg-[#1A2C38] flex items-center justify-center hover:bg-[#243441] active:bg-[#152028] transition-colors duration-200">
              {" "}
              <CiStar />{" "}
            </div>
          </div>
        </div>

        <div className="my-1 text-[10px] font-medium text-slate-400">T20</div>

        <div className="flex items-start justify-between gap-1.5 py-1">
          <div className="flex items-center gap-2">
            <Image
              src="/images/bangladesh.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="rounded-lg object-cover"
              quality={80}
            />
            <div className="text-xs font-semibold leading-4 truncate">
              Bangladesh
            </div>
          </div>
          <div className="text-xs font-medium text-right">0/0 (0.0 ov)</div>
        </div>

        <div className="flex items-start justify-between py-1 gap-1.5">
          <div className="flex items-center gap-2">
            <Image
              src="/images/india.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="rounded-lg object-cover"
              quality={80}
            />
            <div className="text-xs font-semibold leading-4 truncate">
              India
            </div>
          </div>
          <div className="text-xs font-medium text-right">0/0</div>
        </div>

        <div className="mt-1">
          <div className="my-2 text-xs sm:text-sm font-semibold">1x2</div>
          <div className="flex gap-1.5">
            <div className="w-full bg-slate-700/60 rounded-md px-1.5 py-0.5 flex items-center justify-between text-center border border-white/6">
              <div className="text-[10px] sm:text-xs">W1</div>
              <div className="text-xs sm:text-sm font-semibold">3.65</div>
            </div>

            <div className="w-full bg-slate-700/60 rounded-md px-1.5 py-0.5 flex items-center justify-between text-center border border-white/6">
              <div className="text-[10px] sm:text-xs">X</div>
              <div className="text-xs sm:text-sm font-semibold">3.65</div>
            </div>

            <div className="w-full bg-slate-700/60 rounded-md px-1.5 py-0.5 flex items-center justify-between text-center border border-white/6">
              <div className="text-[10px] sm:text-xs">W2</div>
              <div className="text-xs sm:text-sm font-semibold">3.65</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullwidthCard;
