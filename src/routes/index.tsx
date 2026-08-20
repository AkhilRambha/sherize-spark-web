import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import IntroVideo from "@/components/site/IntroVideo";
import { CinematicHero } from "@/components/site/Hero/CinematicHero";
import { Empowerment } from "@/components/site/Empowerment";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { WhyChoose } from "@/components/site/WhyChoose";
import { OrbCTA } from "@/components/site/OrbCTA";
import { PageShell } from "@/components/site/PageShell";

function SectionDivider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <PageShell>
        <CinematicHero />
        <SectionDivider />
        <WhoWeAre />
        <SectionDivider />
        <Empowerment />
        <SectionDivider />
        <WhyChoose />
        <SectionDivider />
        <OrbCTA />
      </PageShell>
    </>
  );
}
