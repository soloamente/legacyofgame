import { Hero } from "@/components/hero";
import { Wrapper } from "@/components/wrapper";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/zero-impact")({
  component: ZeroImpact,
});

export default function ZeroImpact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Wrapper id="zero-impact">
      <Hero title="Coming soon..." subtitle="">
        <p></p>
      </Hero>
    </Wrapper>
  );
}
