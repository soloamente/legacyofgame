import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Ellipse } from "./ellipse";
import { motion } from "framer-motion";

export type Slide = {
  name: string;
  desc?: string;
  color?: string;
  img?: string;
  opacity?: number;
  href?: string;
};

type Props = {
  slides: Slide[];
  showEllipse?: boolean;
};

export function GameSlides({ slides, showEllipse }: Props) {
  return (
    <div
      className="relative w-full flex justify-center items-center pt-2"
      id="game-slides"
    >
      {showEllipse && <Ellipse className="lg:-top-40" />}

      <Carousel
        className="pt-1 max-w-screen-2xl z-10 w-full"
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent className="gap-[56px] -mt-12 ml-4 mr-4">
          {slides.map((s, i) => (
            <CarouselItem
              key={i}
              className={cn(
                "basis-[12rem] h-[18rem] sm:basis-[20rem] sm:h-[26rem] relative transition-opacity duration-300 ease-out",
                i === 0 ? "opacity-100 hover:opacity-100" : "opacity-50"
              )}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full w-full relative"
              >
                <Link
                  to={s.href ?? undefined}
                  className={cn(
                    "peer w-[12rem] h-[16rem] sm:w-[18rem] sm:h-[22rem] flex flex-col justify-start items-start py-6 px-6 border rounded-[16px] select-none relative overflow-hidden transition-all ease-out duration-500 group",
                    i === 0
                      ? "hover:shadow-gameCardHover hover:border-[#FE67FF]"
                      : " cursor-not-allowed"
                  )}
                >
                  <h4 className="text-xl font-semibold text-white">{s.name}</h4>
                  {s.desc && (
                    <p className="font-normal text-white/60">{s.desc}</p>
                  )}
                  <SlideBg
                    className="absolute top-0 left-0 w-full h-full object-cover -z-20"
                    color={s.color}
                  />
                </Link>
                {s.img && (
                  <img
                    src={s.img}
                    className={cn(
                      "pointer-events-none -right-12 sm:-right-8 top-[65%] absolute h-[12rem] sm:h-[20rem] w-auto object-contain select-none transition-all ease-out duration-500 -translate-y-1/2",
                      i === 0
                        ? "group-hover:drop-shadow-gameCardImageHover"
                        : ""
                    )}
                  />
                )}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="top-[-95px] left-auto right-36 translate-x-0 translate-y-0 max-lg:hidden bg-transparent border-none hover:bg-transparent text-[#9000FF] hover:text-[#7800D4] transition-colors" />
        <CarouselNext className="top-[-95px] left-auto right-20 translate-x-0 translate-y-0 max-lg:hidden bg-transparent border-none hover:bg-transparent text-[#9000FF] hover:text-[#7800D4] transition-colors" />
      </Carousel>
    </div>
  );
}

function SlideBg({ className, color }: { className?: string; color?: string }) {
  const id = useId();
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <defs>
        <radialGradient
          id={id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(357.261 472.859) rotate(-123.477) scale(509.067 400.3)"
        >
          <stop stopColor={color ?? "rgba(144, 0, 255, 0.7)"} />
          <stop offset="1" stopColor="#1C273A" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
