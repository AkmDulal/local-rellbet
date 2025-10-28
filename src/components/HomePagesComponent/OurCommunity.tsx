import Image from "next/image";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

function OurCommunity() {
  return (
    <div>
      <div className="flex flex-col gap-6 py-3 container bg-[#213744] text-white rounded shadow-lg pb-5">
        <div className="flex flex-col items-center">
          <h2 className=" text-lg font-medium text-white pb-5 ">
            Join Our community
          </h2>
          <div className="grid grid-cols-6 gap-4 px-4 ">
            <div className="bg-[#222627] p-3 rounded  text-white">
              <FaFacebookF />
            </div>
            <div className="bg-[#222627] p-3 rounded  text-white">
              <FaWhatsapp />
            </div>
            <div className="bg-[#222627] p-3 rounded  text-white">
              <CiInstagram />
            </div>
            <div className="bg-[#222627] p-3 rounded  text-white">
              <BsTwitterX />
            </div>
            <div className="bg-[#222627] p-3 rounded  text-white">
              <FaTelegramPlane />
            </div>
            <div className="bg-[#222627] p-3 rounded  text-white">
              <CiYoutube />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4 flex-col gap-6 py-3 container bg-transparent text-white rounded-2xl">
        <div className="flex flex-col gap-6 py-3 container bg-transparent text-white rounded-2xl px-3">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
                  <span className="text-sm font-bold">18+</span>
                </div>
              </div>

              <Image
                src="/images/nix.png"
                width={90}
                height={40}
                alt="Big win ii"
                loading="lazy"
                className="object-contain"
                quality={80}
              />
              <Image
                src="/images/disco.png"
                width={90}
                height={30}
                alt="Big win ii"
                loading="lazy"
                className=" object-contain"
                quality={80}
              />
            </div>

            <div className="text-sm leading-relaxed space-y-2 text-gray-200">
              <p>
                Rellbet offers an entertaining gaming experience that may
                involve certain risks.
              </p>
              <p>You must be at least 18 years old to use this site.</p>
              <p>Play responsibly and enjoy your time on Rellbet.</p>
              <p>
                Rellbet is operated by Rell Corporation. Unauthorized use,
                copying, or distribution of any content is strictly prohibited.
              </p>
            </div>

            <div className="w-full  gap-2">
              <div className="text-center">
                <p className="text-xs font-bold text-white ">
                  Copyright © 2025 Rellbet.com All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCommunity;
