import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";

type Props = {
  file?: {
    label: string;
    href: string;
  };
};

export function AboutCards({}: Props) {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const width = useWindowWidth();

  return (
    <div
      className="w-full max-w-screen-2xl flex flex-col gap-6"
      id="about-cards"
    >
      {/* Hero Section - Updated to match Zero Impact section styling */}
      <div className="w-full rounded-3xl overflow-hidden relative min-h-fit border-2 border-white/20 p-6 z-0 min-[1024px]:min-h-[454px] flex flex-col justify-center">
        <img
          src={`/assets/png/the-project-bg.png`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        />

        {/* Testo con transizione */}
        <div className="flex justify-start items-center">
          <div
            key="info-text"
            style={{
              opacity: isInfoVisible ? 0 : 1,
              display: width < 765 && isInfoVisible ? "none" : "flex",
            }}
            className="z-10 flex flex-col gap-6 min-[800px]:max-w-[800px] min-[1024px]:px-[48px]" // Centrato verticalmente
          >
            <h1 className="font-orbitron text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] font-black leading-[70px] text-left text-white">
              Transform Gaming.
              <br />
              Master Skills.
              <br />
              Impact Tomorrow.
            </h1>
            <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
              Transforming Gaming Into a Fo rce for Good: Play, Compete, and
              Support Environmental Sustainability with Every Match Played
            </p>
            {/* <div>
                <button className="px-8 py-3 border-2 border-white/40 rounded-xl text-white text-lg font-orbitron font-black bg-transparent transition-all duration-500 hover:bg-white hover:text-[#09041E] hover:border-transparent mt-[16px]">
                  White Paper
                </button>
              </div> */}
          </div>
          {isInfoVisible ? (
            <div
              key="info"
              className="max-[765px]:pt-[42px] min-[765px]:absolute min-[765px]:top-1/2 min-[765px]:transform min-[765px]:-translate-y-1/2 z-10 flex flex-col gap-6 min-[800px]:max-w-[800px] text-gray min-[1024px]:px-[48px]" // Centrato verticalmente
            >
              <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
                In a world where gaming often feels disconnected from real
                value, Legacy of Games emerges as a revolutionary force,
                transforming how skilled players compete, earn, and contribute
                to environmental sustainability.
              </p>
              <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
                The journey of Legacy of Games began with a simple yet powerful
                realization: skilled gaming deserves real recognition.
              </p>
              <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
                While millions of passionate players invested countless hours
                perfecting their gameplay, traditional gaming platforms offered
                little more than fleeting entertainment.
              </p>
            </div>
          ) : null}
        </div>
        {/* Info Coin */}
        <div
          className="absolute top-6 right-6 flex items-center justify-center group cursor-pointer z-20"
          onClick={() => setInfoVisible(!isInfoVisible)}
        >
          <div className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white">
            {isInfoVisible ? (
              <span className="text-white text-xl font-bold hover:text-black">
                ✕
              </span> // Mostra X
            ) : (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <div className="w-1 h-1 bg-white rounded-full transition-all duration-500 group-hover:bg-black"></div>
                <div className="w-1 h-3 bg-white transition-all duration-500 group-hover:bg-black"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 max-[765px]:grid-cols-1 gap-6">
        <div className="rounded-3xl overflow-hidden relative min-[765px]:min-h-[350px] p-8 flex flex-col items-center justify-center border-2 border-white/20">
          <img
            src={`/assets/webp/the-aweakaning.webp`}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
            alt=""
          />
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-orbitron  text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] font-black leading-[70px] text-center mb-4 text-white">
              The Awakening
            </h2>
            <p className="font-poppins text-[22px] max-[765px]:text-[16px] max-[765px]:leading-[24px] font-medium leading-[33px] text-center text-white/90">
              Legacy of Games began with the idea that skilled gaming deserves
              real recognition, unlike traditional platforms that offer only
              fleeting entertainment.
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden relative min-[765px]:min-h-[350px] p-8 flex flex-col items-center justify-center border-2 border-white/20">
          <img
            src={`/assets/webp/the-vision.webp`}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
            alt=""
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-orbitron  text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] font-black leading-[70px] text-center mb-4 text-white">
              The Vision
            </h2>
            <p className="font-poppins text-[22px] max-[765px]:text-[16px] max-[765px]:leading-[24px] font-medium leading-[33px] text-center text-white/90">
              We saw an opportunity to create a platform where skill drives
              success, each match supports sustainability, and gaming excellence
              leads to real value.
            </p>
          </div>
        </div>
      </div>

      {/* Zero Impact Section */}
      <div className="rounded-3xl overflow-hidden relative w-full min-h-fit border-2 border-white/20 p-6 min-[1024px]:min-h-[454px]  flex flex-col justify-center">
        <img
          src={`/assets/png/the-innovation-bg.png`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        />
        <div
          key="info-text"
          className="z-10 flex flex-col gap-6 min-[800px]:max-w-[800px] min-[765px]:py-[32px] min-[1024px]:px-[48px] text-left justify-start"
        >
          <h2 className="font-orbitron font-black leading-[70px] text-left text-white text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] max-[765px]:text-center">
            The Innovation
          </h2>
          <p className="font-poppins text-[16px] min-[765px]:text-[20px] min-[765px]:leading-[35px] font-medium leading-[24px] text-left text-white/90 max-[765px]:text-center">
            Built on TON blockchain and seamlessly integrated with Telegram,
            Legacy of Games represents the convergence of competitive gaming,
            technological innovation, and environmental responsibility.
          </p>
          {/* <div>
              <button className="px-8 py-3 border-2 border-white/40 rounded-xl text-white text-lg font-orbitron font-black bg-transparent transition-all duration-500 hover:bg-white hover:text-[#09041E] hover:border-transparent">
                Learn more
              </button>
            </div> */}
        </div>

        {/* Info Coin */}
      </div>
    </div>
  );
}
