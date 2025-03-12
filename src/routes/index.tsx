import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { GameSlides } from "@/components/game-slides";
import { TokenTabs } from "@/components/token-tabs";
const gempadPng = "/assets/png/gempad.png";
import { ProjectDesc } from "@/components/project-desc";
import { GAME_SLIDES } from "@/data";
import { Wrapper } from "@/components/wrapper";
import { ScrollAnimation } from "@/components/scroll-animation";
const playNowImage = "/assets/png/play-button.png";
const playNowHover = "/assets/png/play-hover.png";
import { useEffect, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size/throttled";

export const Route = createFileRoute("/")({
  component: Homepage,
});

export default function Homepage() {
  const [hover, setHover] = useState(false);
  const height = useWindowHeight();

  const onClick = () => {
    window.scrollTo({ top: height * 0.6, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    return () => window.scrollTo({ top: 0 });
  }, []);

  return (
    <Wrapper id="home">
      <ScrollAnimation className="w-full">
        <Hero
          title={
            <>
              Transform Your Gaming
              <br /> Skills Into Real Value
            </>
          }
          subtitle="Compete in Skill-Based 1v1 Matches to Earn Eeal Rewards While Creating Environmental Impact"
        >
          <div className="mt-[10px]">
            <div className="w-[300px] h-[60px] min-[765px]:h-[78px] flex items-center justify-center">
              <div
                onClick={onClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="w-[350px] select-none transition-all duration-300 ease-out hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.7)]"
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
              >
                <img
                  src={hover ? playNowHover : playNowImage}
                  alt="Play Now"
                  className="w-full object-contain filter cursor-pointer pointer-events-none h-[60px] min-[765px]:h-[78px] "
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </Hero>

        <div className="h-10" id="game-slides" />

        <GameSlides slides={GAME_SLIDES} showEllipse />
      </ScrollAnimation>

      <hr className="h-80" />

      <ScrollAnimation>
        <ProjectDesc file={{ label: "Learn More", href: "/green-paper.pdf" }} />
      </ScrollAnimation>

      <hr className="h-80" id="tokens" />

      <ScrollAnimation>
        <TokenTabs
          imagePaths={[
            "/assets/png/back_token1.png",
            "/assets/png/back_token2.png",
            "/assets/png/back_token3.png",
            "/assets/png/back_token4.png",
          ]}
        />
      </ScrollAnimation>

      <hr className="h-80" id="team" />

      {/* <ScrollAnimation>
        <TeamSlides
          images={[
            "/assets/png/RoadMap.png",
            "/assets/png/Frame3.png",
            "/assets/png/Frame1.png",
            "/assets/png/Frame2.png",
          ]}
        />
      </ScrollAnimation>

      <hr className="h-80" /> */}

      <ScrollAnimation>
        <img src={gempadPng} className="w-60 sm:w-80 h-auto" />
      </ScrollAnimation>
    </Wrapper>
  );
}
