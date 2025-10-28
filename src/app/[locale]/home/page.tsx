import JoinCard from "@/components/ui/JoinCard";
import { getTranslations } from "next-intl/server";
import GlobalSlider from "@/components/GlobalSlider";
import BigWin from "@/components/HomePagesComponent/BigWin";
import Card from "@/components/ui/Card";
import FullwidthCard from "@/components/ui/FullwidthCard";
import DepositBonus from "@/components/HomePagesComponent/DepositBonus";
import OurCommunity from "@/components/HomePagesComponent/OurCommunity";
export default async function HomePage() {
  const t = await getTranslations("pages.home");
  const joindata = t.raw("joindata") as
    | Array<Record<string, unknown>>
    | undefined;
  const winData = t.raw("BigWins") as
    | Array<Record<string, unknown>>
    | undefined;

  return (
    <>
      {/* JOIN NOW  */}
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

      {/* Recent Big Wins */}
      <BigWin data={winData} />

      {/* Hot Games */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title="Hot Games"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
          loop
          autoplayDelay={9000}
          columns={{
            base: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            "2xl": 3,
          }}
          gap={16}
        >
          {winData?.map((item: Record<string, unknown>) => (
            <Card
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      {/* Slots */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title="Slots"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
          loop
          autoplayDelay={9000}
          columns={{
            base: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            "2xl": 3,
          }}
          gap={16}
        >
          {winData?.map((item: Record<string, unknown>) => (
            <Card
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      {/* Slots */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title="Live Sports"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
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
          {winData?.map((item: Record<string, unknown>) => (
            <FullwidthCard
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      {/* Game Shows */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title="Game Shows"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
          loop
          autoplayDelay={9000}
          columns={{
            base: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            "2xl": 3,
          }}
          gap={16}
        >
          {winData?.map((item: Record<string, unknown>) => (
            <Card
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      {/*  Live Casino */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title=" Live Casino"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
          loop
          autoplayDelay={9000}
          columns={{
            base: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            "2xl": 3,
          }}
          gap={16}
        >
          {winData?.map((item: Record<string, unknown>) => (
            <Card
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      {/*  Bingo */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title="Bingo"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
          loop
          autoplayDelay={9000}
          columns={{
            base: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            "2xl": 3,
          }}
          gap={16}
        >
          {winData?.map((item: Record<string, unknown>) => (
            <Card
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      {/*  Exclusive */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title="Exclusive"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
          loop
          autoplayDelay={9000}
          columns={{
            base: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            "2xl": 3,
          }}
          gap={16}
        >
          {winData?.map((item: Record<string, unknown>) => (
            <Card
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      {/*  100% Deposit Bonus */}
      <div className="pt-5">
        <DepositBonus />
      </div>

      {/*  New Releases */}
      <div className="pt-5">
        <GlobalSlider
          icon="/images/icon.png"
          title="Exclusive"
          rightVariant="actions"
          rightLabel=""
          cta={{ label: "All", href: "#" }}
          loop
          autoplayDelay={9000}
          columns={{
            base: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            "2xl": 3,
          }}
          gap={16}
        >
          {winData?.map((item: Record<string, unknown>) => (
            <Card
              key={String(item.id)}
              data={{
                id: String(item.id),
                images: String(item.card),
              }}
            />
          ))}
        </GlobalSlider>
      </div>

      <div className="pt-5 mt-5">
        <OurCommunity />
      </div>

      {/* <Rows count={11} label={t("rowLabel")} /> */}
    </>
  );
}
