const ellissiSvg = "/assets/svg/ellissi.svg";
import React, { ReactNode } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: ReactNode;
};

/* 

className="text-white font-orbitron text-[72px] font-black leading-[84px] tracking-[0.02em] text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"

*/

const HeroTitle = ({ children }: { children: ReactNode }) => {
  const width = useWindowWidth();

  return (
    <h1
      className="font-orbitron text-center text-white font-black drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] leading-[120%]"
      style={{
        fontSize: width < 765 ? "32px" : width < 1440 ? "50px" : "84px",
      }}
    >
      {children}
    </h1>
  );
};

export function Hero({ title, subtitle, children }: Props) {
  const width = useWindowWidth();

  return (
    <div className="flex justify-center items-center w-full h-[90vh] relative">
      <img
        src={ellissiSvg}
        className="w-[200vw] sm:w-[170vw] lg:w-[180vw] max-w-fit object-fill xl:w-[160%] h-auto absolute -z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none"
      />
      <div className="w-full z-10 text-center flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center gap-[20px]">
          <HeroTitle>{title}</HeroTitle>
          <p
            className="text-white/70 font-poppins leading-[40px] max-md:leading-[30px] whitespace-normal max-w-[700px]"
            style={{
              fontSize: width < 765 ? "18px" : "20px",
            }}
          >
            {subtitle}
          </p>
          {React.isValidElement(children) && React.cloneElement(children)}
        </div>
      </div>
    </div>
  );
}
