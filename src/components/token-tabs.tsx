import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const TokenTabs = ({ imagePaths }: { imagePaths: string[] }) => {
  const [isInfoVisible, setInfoVisible] = useState(false);

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-6">
      <div
        className="w-full min-h-[400px] max-h-min rounded-3xl overflow-hidden relative border-2 border-white/20"
        style={{
          background: `url(${imagePaths[0]}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-h-[396px] min-[765px]:absolute min-[765px]:right-20 min-[765px]:top-1/2 transform min-[765px]:-translate-y-1/2 ">
          <img
            src="/assets/webp/lx.webp"
            className="max-h-[396px] relative h-[100%] object-contain"
            alt="Token"
          />
        </div>

        {isInfoVisible ? (
          <div
            key="info"
            className="min-[765px]:absolute min-[765px]:top-1/2 min-[765px]:left-16 transform min-[765px]:-translate-y-1/2 z-10 flex flex-col gap-6 max-w-[800px] text-gray max-[765px]:p-[20px]" // Centrato verticalmente
          >
            <p className="font-poppins max-[765px]:text-[16px] max-[765px]:leading-[24px] text-[22px] font-medium leading-[26px] text-left text-black">
              Legacy of Game introduces USDC betting to revolutionize
              competitive gaming with secure, stable, and instant transactions.
              By leveraging USDC, players can bet confidently, turning every
              match into a rewarding experience.
            </p>
            <p className="font-poppins max-[765px]:text-[16px] max-[765px]:leading-[24px] text-[22px] font-medium leading-[26px] text-left text-black">
              This innovation not only enhances user engagement but also drives
              demand for LX, the platform's exclusive cryptocurrency, as the
              ecosystem grows. With more players and bets fueling the economy,
              LX gains value, cementing its role as a key asset in the future of
              gaming.
            </p>
          </div>
        ) : (
          <div
            key="default"
            className="min-[765px]:absolute min-[765px]:top-16 min-[765px]:left-16 flex flex-col gap-4 max-w-[700px] max-[765px]:p-[20px]"
          >
            <h2 className="font-orbitron text-[40px] max-[765px]:leading-[35px] max-[765px]:text-[24px] font-black leading-[60px] text-left text-black">
              The Next Era of Competitive
              <br />
              Gaming with USDC
            </h2>
            <p className="font-poppins text-[18px] font-medium leading-[26px] text-left text-black/90">
              Empowering players worldwide with seamless USDC betting, turning
              every match into an opportunity to win and redefine the game.
            </p>
            <div className="mt-2">
              <Link to="/swap">
                <button className="px-10 py-4 border-2 border-black/100 rounded-xl text-black text-xl font-orbitron font-black bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-black hover:text-white hover:border-transparent">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        )}

        <div
          className="absolute top-6 right-6 flex items-center justify-center group cursor-pointer"
          onClick={() => setInfoVisible(!isInfoVisible)}
        >
          <div className="w-8 h-8 rounded-full border-2 border-black/50 flex items-center justify-center transition-all duration-500 group-hover:border-black group-hover:bg-black">
            {isInfoVisible ? (
              <span className="text-black text-xl font-bold hover:text-white">
                ✕
              </span>
            ) : (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <div className="w-1 h-1 bg-black rounded-full transition-all duration-500 group-hover:bg-white"></div>
                <div className="w-1 h-3 bg-black transition-all duration-500 group-hover:bg-white"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 min-[1024px]:grid-cols-2 gap-6">
        <div
          className="rounded-3xl overflow-hidden relative border-2 border-white/20 p-[20px] min-[1080px]:p-[48px]"
          style={{ backgroundColor: "#13091A" }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-orbitron text-[40px] max-[765px]:leading-[35px]  max-[765px]:text-[24px]  font-black leading-[70.22px] text-white">
              Token Description
            </h2>

            <div className="text-gray-300">
              <p className="font-poppins text-[16px] font-medium leading-[26px] text-left text-gray">
                The LOG token powers our ecosystem, turning gaming achievement
                into tangible value. Built with sustainability in mind, our
                token economy ensures:
              </p>
            </div>

            <ul className="text-gray-300  text-[16px] space-y-3 ml-10">
              <li className="list-disc">Merit-based reward distribution</li>
              <li className="list-disc">Transparent transaction system</li>
              <li className="list-disc">Stable earning potential</li>
              <li className="list-disc">
                Environmental impact through the Zero Impact Fund
              </li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-3xl overflow-hidden relative border-2 border-white/20 p-[20px] min-[1080px]:p-[48px]"
          style={{ backgroundColor: "#13091A" }}
        >
          <div className="flex flex-col gap-4">
            <ul className="text-gray-300 space-y-6">
              <li className="space-y-2">
                <div className="text-lg font-medium">Total Supply:</div>
                <div>880000000</div>
              </li>
              <li className="space-y-2">
                <div className="text-lg font-medium">
                  Private sale coming soon:
                </div>
                <div>XXXXXXXXX</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="w-full rounded-3xl overflow-hidden relative h-[max(950px, fit-content)] border-2 border-white/20 bg-gray-900"
        style={{
          background: `url(${imagePaths[3]}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Title Section */}
        <div className="min-[1080px]:p-[50px] p-[20px] flex flex-col">
          <h2 className="font-orbitron text-white text-[56px] max-[765px]:leading-[35px]  max-[765px]:text-[24px]  font-black leading-[80.26px] mb-4">
            Tokenomics
          </h2>
          <p className="font-poppins text-gray-300 text-[16px] min-[765px]:text-[20px] font-medium max-[765px]:leading-[24px] leading-9">
            The LOGX token powers our ecosystem, turning<br></br>
            gaming achievement into tangible value.
          </p>
        </div>

        {/* Pie Chart */}
        <div className="p-[20px] min-[1080px]:p-[50px]  flex gap-16">
          <img
            src="/assets/png/torta.png"
            alt="Token Distribution"
            className="w-[700px] h-auto"
          />
        </div>

        {/* Rectangles - Separate Control */}
        <div className="absolute top-[100px] left-[900px] w-[50%] max-[1024px]:none">
          <img
            src="/assets/png/rettangoli.png"
            alt="Token Allocation"
            className="h-[700px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};
