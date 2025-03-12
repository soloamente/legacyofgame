import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { Link } from "@tanstack/react-router";

type Props = {
  file?: {
    label: string;
    href: string;
  };
};

export function ProjectDesc({}: Props) {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [isInfoVisible2, setInfoVisible2] = useState(false);
  const width = useWindowWidth();

  return (
    <div className="w-full max-w-screen-2xl flex flex-col gap-6">
      {/* Hero Section - Updated to match Zero Impact section styling */}
      <div className="w-full rounded-3xl overflow-hidden relative min-h-fit border-2 border-white/20 p-6 z-0">
        <img
          src={`/assets/png/first_image.png`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        />

        {/* Testo con transizione */}
        <div className="flex justify-start items-center relative">
          <div
            key="info-text"
            style={{
              opacity: isInfoVisible ? 0 : 1,
              display: width < 765 && isInfoVisible ? "none" : "flex",
            }}
            className="z-10 flex flex-col gap-6 min-[800px]:max-w-[800px] min-[765px]:py-[48px] min-[765px]:px-[48px]" // Centrato verticalmente
          >
            <h1 className="font-orbitron text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] font-black leading-[70px] text-left text-white">
              Revolutionizing
              <br />
              Competitive Gaming
              <br />
              Through Technology
            </h1>
            <div>
              <a href="/white-paper.pdf" target="_blank">
                <button className="px-8 py-3 border-2 border-white/40 rounded-xl text-white text-lg font-orbitron font-black bg-transparent transition-all duration-500 hover:bg-white hover:text-[#09041E] hover:border-transparent mt-[16px]">
                  White Paper
                </button>
              </a>
            </div>
          </div>
          {isInfoVisible ? (
            <div
              key="info"
              className="relative max-[765px]:pt-[48px] min-[765px]:absolute min-[765px]:top-1/2 min-[765px]:left-[48px] min-[765px]:transform min-[765px]:-translate-y-1/2 z-10 flex flex-col gap-6 min-[800px]:max-w-[800px] text-gray" // Centrato verticalmente
            >
              <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
                Legacy of Games is pioneering a new era where competitive gaming
                transcends entertainment.
              </p>
              <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
                We've created a platform where skill reigns supreme, merit
                determines success, and gaming becomes a force for positive
                change.
              </p>
              <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
                Built on cutting-edge blockchain technology, our platform
                ensures every match is transparent, every reward is earned, and
                every victory contributes to environmental sustainability
                through our Zero Impact Fund.
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
            src={`/assets/png/second_image.png`}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
            alt=""
          />
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-orbitron  text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] font-black leading-[70px] text-center mb-4 text-white">
              Skill-Based
              <br />
              Earnings
            </h2>
            <p className="font-poppins text-[22px] max-[765px]:text-[16px] max-[765px]:leading-[24px] font-medium leading-[33px] text-center text-white/90">
              Master your game, prove your worth in thrilling 1v1 matches, and
              transform victory into tangible rewards. Your skill is your
              greatest asset.
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden relative min-[765px]:min-h-[350px] p-8 flex flex-col items-center justify-center border-2 border-white/20">
          <img
            src={`/assets/png/third_image.png`}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
            alt=""
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-orbitron  text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] font-black leading-[70px] text-center mb-4 text-white">
              Blockchain
              <br />
              Powered Fairness
            </h2>
            <p className="font-poppins text-[22px] max-[765px]:text-[16px] max-[765px]:leading-[24px] font-medium leading-[33px] text-center text-white/90">
              Experience truly transparent competition where every match,
              transaction, and reward is verifiable on the blockchain. Fair play
              isn't just a promise – it's guaranteed.
            </p>
          </div>
        </div>
      </div>

      {/* Zero Impact Section */}
      <div className="rounded-3xl overflow-hidden relative w-full min-h-fit border-2 border-white/20 p-6">
        <img
          src={`/assets/png/four_image.png`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        />
        <div
          style={{
            opacity: isInfoVisible2 ? 0 : 1,
            display: width < 765 && isInfoVisible2 ? "none" : "flex",
          }}
          key="info-text"
          className="flex flex-col gap-[12px] min-[765px]:px-[48px] relative z-10 min-[800px]:max-w-[800px] min-[765px]:py-[64px] min-[1024px]:px-[48px]"
        >
          <h2 className="font-orbitron font-black leading-[70px] text-left text-white text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px] ">
            Zero Impact
          </h2>
          <p className="font-poppins text-[16px] min-[765px]:text-[20px] min-[765px]:leading-[24px] font-medium leading-[33px] text-left text-white/90">
            Transforming Gaming Into a Force for Good: Play, Compete, and
            Support Environmental Sustainability with Every Match Played
          </p>
          <div>
            <Link to="/zero-impact">
              <button className="px-8 py-3 border-2 border-white/40 rounded-xl text-white text-lg font-orbitron font-black bg-transparent transition-all duration-500 hover:bg-white hover:text-[#09041E] hover:border-transparent">
                Learn more
              </button>
            </Link>
          </div>
        </div>
        {isInfoVisible2 ? (
          <div
            key="info"
            className="max-[765px]:pt-[48px] relative min-[765px]:absolute min-[765px]:top-[50%] min-[765px]:px-[48px] min-[765px]:translate-y-[-50%] z-10 flex flex-col gap-6 min-[800px]:max-w-[800px] text-gray"
          >
            <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
              Every match played on our platform isn’t just about skill and
              competition—it’s also a step towards a more sustainable future.
            </p>
            <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
              Through our Zero Impact Fund, 1.5% of all gaming fees are
              allocated directly to support verified environmental initiatives.
            </p>
            <p className="font-poppins text-[16px] min-[765px]:text-[20px]">
              These contributions fund impactful projects that address pressing
              environmental challenges, ensuring that every game you play leaves
              a positive mark on the planet.
            </p>
          </div>
        ) : null}

        {/* Info Coin */}
        <div
          className="z-20 absolute top-6 right-6 flex items-center justify-center group cursor-pointer"
          onClick={() => setInfoVisible2(!isInfoVisible2)}
        >
          <div className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white">
            {isInfoVisible2 ? (
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
    </div>
  );
}
