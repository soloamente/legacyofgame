const logoSvg = "/assets/svg/logo.svg";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
const buttonL = "/assets/png/buy_lx.png";
const buttonHover = "/assets/png/buy-hover.png";
import { useWindowWidth } from "@react-hook/window-size/throttled";

const NAV_LINK_1 = [
  {
    children: "Home",
    href: "/",
  },
  {
    children: "Swap",
    href: "/swap",
    hash: "tokens",
  },
  {
    children: "The Team",
    href: "/about",
    /* hash: "team", */
  },
  {
    children: "Zero impact",
    href: "/zero-impact",
  },
];

const NAV_LINK_2 = [
  {
    children: (
      <Link to="/swap" className="contents">
        <div
          className="h-[64px] select-none transition-all duration-300 ease-out hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.7)]"
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
        >
          <img
            src={buttonL}
            alt="Button L"
            className="h-full object-contain filter cursor-pointer pointer-events-none"
            draggable="false"
          />
        </div>
      </Link>
    ),
    href: "/swap",
  },
];

export function Header() {
  return (
    <header className="flex justify-center items-center px-8 py-4 sm:px-12 sm:py-6 w-full z-30 fixed bg-background/60 backdrop-blur-2xl h-[170px]">
      <div className="flex justify-center items-center max-w-screen-2xl w-full">
        <Link to="/" className="mx-auto">
          <img className="w-12 mx-auto" src={logoSvg} />
        </Link>
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
}

function DesktopMenu() {
  const width = useWindowWidth();

  useEffect(() => {}, []);

  const [hover, setHover] = useState(false);

  return (
    <>
      {width > 765 && (
        <ul
          className={[
            "flex gap-[48px] text-[16px] text-white items-center absolute top-[50%] translate-y-[-50%]",
            width > 905
              ? "left-[50%] translate-x-[-50%]"
              : "left-[84px] top-[50%]",
          ].join(" ")}
        >
          {NAV_LINK_1.map(({ children, href, hash }, i) => (
            <li key={`navlink-1-${i}`}>
              <Link
                to={href}
                hash={hash}
                className="transition-colors text-white/70  hover:text-white duration-300"
              >
                {children}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {width > 765 && (
        <Link
          to="/swap"
          className="contents"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ height: "40px" }}
        >
          <div
            className="h-[64px] select-none transition-all duration-300 ease-out hover:drop-shadow-[0_0_25px_rgba(147,51,234,0.7)]"
            onDragStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <img
              src={hover ? buttonHover : buttonL}
              alt="Button L"
              className="w-full h-full object-contain filter cursor-pointer pointer-events-none"
              draggable="false"
            />
          </div>
        </Link>
      )}
    </>
  );
}

function MobileMenu() {
  const width = useWindowWidth();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    width < 765 && (
      <>
        <button
          className="grid place-content-center gap-[5px] lg:hidden z-50 aspect-square focus-visible:rounded-xl w-[40px] rounded-[8px] border-[1px] border-white/20 md:hidden"
          onClick={() => setIsActive((v) => !v)}
        >
          <div
            className={cn(
              "w-[16px] h-[1px]  bg-white rounded-full transition-transform duration-300",
              isActive ? "rotate-45 translate-y-[5px]" : ""
            )}
          />
          <div
            className={cn(
              "w-[16px] bg-white rounded-full transition-transform",
              isActive ? "h-0" : "h-[1px] "
            )}
          />
          <div
            className={cn(
              "w-[16px] h-[1px] bg-white rounded-full transition-transform duration-300",
              isActive ? "-rotate-45 -translate-y-[6px]" : ""
            )}
          />
        </button>
        <nav
          className={cn(
            "flex items-center gap-20 lg:hidden absolute top-0 pt-[160px] flex-col bg-background w-screen h-screen left-0 transition-[opacity_transform] duration-500",
            isActive
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-10 opacity-0 pointer-events-none"
          )}
        >
          <ul className="flex gap-16 text-2xl text-white items-center flex-col">
            {NAV_LINK_1.map(({ children, href, hash }, i) => (
              <li key={`navlink-1-${i}`}>
                <Link
                  to={href}
                  hash={hash}
                  className="p-4 transition-colors hover:text-white/70"
                  onClick={() => setIsActive(false)}
                >
                  {children}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-12 text-xl text-white items-center flex-col">
            {NAV_LINK_2.map(({ children }, i) => (
              <li key={`navlink-2-${i}`}>{children}</li>
            ))}
          </ul>
        </nav>
      </>
    )
  );
}

export const NewHeader = () => {
  return (
    <nav
      style={{
        width: "100vw",
        minHeight: "40px",
      }}
      className="fixed bg-background/60 backdrop-blur-2xl z-30 py-[12px] md:py-[20px] px-[12px] lg:px-[90px]"
    >
      <div className="flex flex-row justify-between items-center max-w-[1550px] mx-auto">
        <Link className="h-[40px]" to="/">
          <img className="w-[42px] " src={logoSvg} />
        </Link>
        <DesktopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};
