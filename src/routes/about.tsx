import { AboutCards } from "@/components/about-us-cards";
import { Hero } from "@/components/hero";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Wrapper } from "@/components/wrapper";
import { useWindowHeight } from "@react-hook/window-size/throttled";
import { createFileRoute, Link } from "@tanstack/react-router";
import Lenis from "lenis";
import { useEffect, useState } from "react";
const playNowImage = "/assets/png/play-button.png";
const playNowHover = "/assets/png/play-hover.png";
const seeMore = "/assets/png/see-more.png";
const seeMoreHover = "/assets/png/see-more-hover.png";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

const TEAM = [
  {
    img: "/assets/png/team/matteo.png",
    name: "Matteo A.",
    role: "CEO",
  },
  {
    img: "/assets/png/team/christian.png",
    name: "Christian A.",
    role: "CFO",
  },
  {
    img: "/assets/png/team/luca.png",
    name: "Luca A.",
    role: "COO",
  },
  {
    img: "/assets/png/team/gianluca.png",
    name: "Gianluca D. A.",
    role: "Relationship Manager",
  },
  {
    img: "/assets/png/team/jacopo.png",
    name: "Jacopo C.",
    role: "Content Creator",
  },
  {
    img: "/assets/png/team/francesco.png",
    name: "Francesco D.B.",
    role: "Social Media Manager",
  },
];

function RouteComponent() {
  const [playHover, setPlayhover] = useState(false);
  const [seeHover, setSeehover] = useState(false);
  const lenis = new Lenis();
  const height = useWindowHeight();

  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: height * 0.8, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    return () => window.scrollTo({ top: 0 });
  }, []);

  return (
    <Wrapper id="about">
      <ScrollAnimation className="w-full">
        <Hero
          title="About Us"
          subtitle="Welcome to a world built by innovators, driven by competition, and powered by blockchain. Welcome to the future of gaming."
        >
          <div className="mt-[10px]">
            <div className="w-[300px] h-[60px] min-[765px]:h-[78px] flex items-center justify-center">
              <div
                onClick={onClick}
                onMouseEnter={() => setSeehover(true)}
                onMouseLeave={() => setSeehover(false)}
                className="w-[350px] select-none transition-all duration-300 ease-out hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.7)]"
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
              >
                <img
                  src={seeHover ? seeMoreHover : seeMore}
                  alt="See more"
                  className="w-full object-contain filter cursor-pointer pointer-events-none h-[60px] min-[765px]:h-[78px] "
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </Hero>
      </ScrollAnimation>

      <ScrollAnimation>
        <AboutCards></AboutCards>
      </ScrollAnimation>

      <hr className="h-[150px]" />

      <ScrollAnimation>
        <div className="flex flex-col gap-[74px] items-center justify-center max-w-[1400px] mx-auto">
          <h2 className="font-orbitron text-[24px] min-[765px]:text-[32px] min-[1440px]:text-[64px] font-black text-white">
            The minds behind the project
          </h2>

          <div className="w-full grid grid-cols-1 min-[765px]:grid-cols-2 min-[1024px]:grid-cols-3 place-items-center gap-[32px]">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="w-full flex flex-col gap-[17px] items-center justify-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[168px] aspect-square"
                />
                <p className="font-orbitron text-[28px] min-[1024px]:text-[34px] text-white font-black">
                  {member.name}
                </p>
                <p className="text-[16px] opacity-75 mt-[-14px]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      <hr className="h-[150px]" />

      <ScrollAnimation className="w-full">
        <div
          className="mx-auto rounded-3xl overflow-hidden relative w-full min-h-fit border-2 border-white/20 p-6 flex flex-col gap-[48px] items-center justify-center max-w-[1440px] py-[64px]"
          style={{
            background: "url(/assets/png/join-legacy.png) no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col gap-[12px] items-center justify-center">
            <h3 className="font-orbitron text-[32px] min-[765px]:text-[32px] min-[1024px]:text-[56px] font-black text-white">
              Join the legacy
            </h3>
            <p className="text-[16px] font-poppins min-[765px]:text-[20px] text-center max-w-[500px]">
              Ready to transform your gaming skills into real value while making
              a positive impact?
            </p>
          </div>
          <Link
            to="/"
            hash="game-slides"
            className="contents"
            onMouseEnter={() => setPlayhover(true)}
            onMouseLeave={() => setPlayhover(false)}
          >
            <div
              className="w-[350px] select-none transition-all duration-300 ease-out hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.7)]"
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            >
              <img
                src={playHover ? playNowHover : playNowImage}
                alt="Play Now"
                className="w-full object-contain filter cursor-pointer pointer-events-none h-[60px] min-[765px]:h-[78px] "
                draggable="false"
              />
            </div>
          </Link>
        </div>
      </ScrollAnimation>
      <hr className="h-[150px]" />
    </Wrapper>
  );
}
