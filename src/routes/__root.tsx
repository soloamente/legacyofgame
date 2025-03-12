import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router";
import { NewHeader } from "@/components/header";
import { Footer } from "@/components/footer";
import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const lenis = new Lenis();
  const router = useRouter();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [router.basepath]);

  return (
    <>
      <NewHeader />
      <Outlet />
      <Footer />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );
