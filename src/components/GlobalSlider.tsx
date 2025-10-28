/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

type RightVariant = "actions" | "bar";

type ResponsiveColumns = {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  ["2xl"]?: number;
  xs?: number;
};

type GlobalSliderProps = {
  icon?: string;
  title: string;
  rightVariant?: RightVariant;
  rightLabel?: string;
  cta?: { label: string; href: string };
  rightBarActive?: boolean;

  columns?: ResponsiveColumns;
  gap?: number;

  perView?: number;

  loop?: boolean;
  autoplayDelay?: number;
  breakpoints?: Record<
    number,
    { slidesPerView: number; spaceBetween?: number }
  >;

  className?: string;
  children: React.ReactNode;
};

export default function GlobalSlider({
  icon,
  title,
  rightVariant = "actions",
  rightLabel = "",
  cta = { label: "All", href: "/all" },
  rightBarActive = false,

  columns,
  gap = 16,
  perView = 4,

  loop = false,
  autoplayDelay = 0,
  breakpoints,
  className,
  children,
}: GlobalSliderProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = useMemo(
    () =>
      React.Children.toArray(children).map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      )),
    [children]
  );
  const bpFromColumns: Record<
    number,
    { slidesPerView: number; spaceBetween: number }
  > = {};
  if (columns) {
    if (columns.base != null)
      bpFromColumns[0] = { slidesPerView: columns.base, spaceBetween: gap };
    if (columns.xs != null)
      bpFromColumns[480] = { slidesPerView: columns.xs, spaceBetween: gap };
    if (columns.sm != null)
      bpFromColumns[640] = { slidesPerView: columns.sm, spaceBetween: gap };
    if (columns.md != null)
      bpFromColumns[768] = { slidesPerView: columns.md, spaceBetween: gap };
    if (columns.lg != null)
      bpFromColumns[1024] = { slidesPerView: columns.lg, spaceBetween: gap };
    if (columns.xl != null)
      bpFromColumns[1280] = { slidesPerView: columns.xl, spaceBetween: gap };
    if (columns["2xl"] != null)
      bpFromColumns[1536] = {
        slidesPerView: columns["2xl"],
        spaceBetween: gap,
      };
  }

  const computedBreakpoints = breakpoints
    ? breakpoints
    : Object.keys(bpFromColumns).length
    ? bpFromColumns
    : {
        0: { slidesPerView: Math.min(perView, 1.2), spaceBetween: gap },
        640: { slidesPerView: Math.min(perView, 2), spaceBetween: gap },
        768: { slidesPerView: Math.min(perView, 2.5), spaceBetween: gap },
        1024: { slidesPerView: Math.min(perView, 3), spaceBetween: gap },
        1280: { slidesPerView: perView, spaceBetween: gap },
        1536: { slidesPerView: perView, spaceBetween: gap },
      };
  if (!mounted) return null;

  console.log(icon, "iconiconiconiconiconiconicon");

  return (
    <section className={className}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex gap-3">
          {icon && (
            <Image
              src={icon}
              width={24}
              height={24}
              alt="Big win ii"
              loading="lazy"
              className="rounded-lg object-cover"
              quality={80}
            />
          )}

          <h2 className="sm:text-xl font-bold">{title}</h2>
        </div>

        {rightVariant === "actions" ? (
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-sm opacity-80">
              {rightLabel}
            </span>
            <Link
              href={cta.href}
              className="px-3 py-1 bg-brand-secondary rounded hover:bg-[#2a4152] active:bg-brand-primary transition-colors duration-200"
            >
              {cta.label}
            </Link>

            <button
              ref={prevRef}
              aria-label="Previous"
              className="pl-2 rounded w-8 h-8 bg-brand-secondary hover:bg-[#2a4152] active:bg-brand-primary transition-colors duration-200"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next"
              className="pl-2 rounded w-8 h-8 bg-brand-secondary hover:bg-[#2a4152] active:bg-brand-primary transition-colors duration-200"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        ) : (
          <div className="h-8 flex items-center">
            <span
              className={`w-3 h-0.5 rounded-full transition-colors duration-300
                ${
                  rightBarActive
                    ? "bg-(--color-brand-active,#0077FF)"
                    : "bg-white/90"
                }`}
            />
          </div>
        )}
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={loop}
        slidesPerView={perView}
        spaceBetween={gap}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        autoplay={
          autoplayDelay > 0
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        breakpoints={computedBreakpoints}
      >
        {slides}
      </Swiper>
    </section>
  );
}
