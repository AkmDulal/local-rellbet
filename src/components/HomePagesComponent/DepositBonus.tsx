import Image from "next/image";

function DepositBonus() {
  return (
    <div className="flex flex-col gap-6 py-3 container bg-brand-secondary text-white rounded shadow-lg">
      <div className="flex flex-col items-center gap-[15px] p-3 sm:p-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          <span className="text-green-400">100% </span>Deposit Bonus
        </h2>
        <div className="grid grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full max-w-md sm:max-w-lg md:max-w-none">
          <Image
            src="/images/token-1.png"
            width={20}
            height={20}
            alt="Big win ii"
            loading="lazy"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto object-cover"
            quality={80}
          />
          <Image
            src="/images/token-2.png"
            width={20}
            height={20}
            alt="Big win ii"
            loading="lazy"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto object-cover"
            quality={80}
          />
          <Image
            src="/images/token-3.png"
            width={20}
            height={20}
            alt="Big win ii"
            loading="lazy"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto object-cover"
            quality={80}
          />
          <Image
            src="/images/token-4.png"
            width={20}
            height={20}
            alt="Big win ii"
            loading="lazy"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto object-cover"
            quality={80}
          />
          <Image
            src="/images/token-5.png"
            width={20}
            height={20}
            alt="Big win ii"
            loading="lazy"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto object-cover"
            quality={80}
          />
          <Image
            src="/images/token-6.png"
            width={20}
            height={20}
            alt="Big win ii"
            loading="lazy"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto object-cover"
            quality={80}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-sm sm:max-w-md md:max-w-none">
          <div className="flex justify-center">
            <Image
              src="/images/card-1.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/card-2.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/card-3.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/card-4.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/card-5.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/card-6.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/card-7.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/card-8.png"
              width={20}
              height={20}
              alt="Big win ii"
              loading="lazy"
              className="w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-8 object-contain"
              quality={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositBonus;
