'use client';
import GlobalSlider from "@/components/GlobalSlider";


type Props = { count: number; label?: string };

export default function Rows({ count, label = "Section" }: Props) {
  return (
    <div className="space-y-4">




      <GlobalSlider
        title="Featured"
        rightVariant="actions"
        rightLabel=""
        cta={{ label: "All", href: "/tvs" }}
        loop
        autoplayDelay={3000}
        columns={{
          base: 3, // 0px+
          sm: 3, // 640px+
          md: 3, // 768px+
          lg: 3, // 1024px+
          xl: 3, // 1280px+
          "2xl": 5, // 1536px+
        }}
        gap={16}
      >
        <div className="rounded-xl bg-white shadow-md p-4 min-h-40">
          Slide 1 content
        </div>
        <div className="rounded-xl bg-white shadow-md p-4 min-h-40">
          Slide 2 content
        </div>
        <div className="rounded-xl bg-white shadow-md p-4 min-h-40">
          Slide 3 content
        </div>
        <div className="rounded-xl bg-white shadow-md p-4 min-h-40">
          Slide 4 content
        </div>
        <div className="rounded-xl bg-white shadow-md p-4 min-h-40">
          Slide 5 content
        </div>
      </GlobalSlider>

      {Array.from({ length: count }, (_, i) => (
        <section
          key={i}
          className="rounded-xl border border-black/10 dark:border-white/10 p-4"
        >
          <h2 className="font-semibold">
            {label} {i + 1}
          </h2>
          <p className="text-sm opacity-80">Your content goes here…</p>
        </section>
      ))}
    </div>
  );
}
