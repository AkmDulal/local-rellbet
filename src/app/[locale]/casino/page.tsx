import Rows from "@/components/Rows";
import { getTranslations } from "next-intl/server";
import GlobalSlider from "@/components/GlobalSlider";
import JoinCard from "@/components/ui/JoinCard";
import CasinoTabs from "@/components/CasinoPagesComponent/CasinoTabs";

export default async function CasinoPage() {
  const t = await getTranslations("pages.home");
  const joindata = t.raw("joindata") as
    | Array<Record<string, unknown>>
    | undefined;
  const winData = t.raw("BigWins") as
    | Array<Record<string, unknown>>
    | undefined;

  return (
    <>
      <GlobalSlider
        title=""
        rightVariant="actions"
        rightLabel=""
        cta={{ label: "All", href: "/tvs" }}
        loop
        autoplayDelay={9000}
        columns={{
          base: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
          "2xl": 1,
        }}
        gap={16}
      >
        {joindata?.map((item: Record<string, unknown>) => (
          <JoinCard
            key={String(item.id)}
            data={{
              id: String(item.id),
              title: String(item.title),
              sortTitle: String(item.sortTitle),
              details: String(item.details),
              buttonText: String(item.buttonText),
              images: String(item.images),
            }}
          />
        ))}
      </GlobalSlider>

      <div className="relative w-full mt-5">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </span>

        <input
          placeholder="Search Games"
          className="w-full rounded-md bg-brand-secondary pl-10 pr-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
        />
      </div>

      <div className="pt-4">
        <CasinoTabs />
      </div>
    </>
  );
}
