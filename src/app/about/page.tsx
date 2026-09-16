import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Multidisciplinary background across CAD, microcontrollers, organic chemistry, and manufacturing.",
};

const skills = [
  {
    title: "Design & manufacturing",
    body: "Parametric CAD, part-splitting and tolerancing for assembly, FDM printing and slicer tuning, fabrication and finishing of metal and plastic parts.",
  },
  {
    title: "Electronics & control",
    body: "AVR / Arduino and ESP32 firmware, analog sensing and ADC calibration, servo and solenoid actuation, breadboard-to-panel wiring.",
  },
  {
    title: "Chemistry",
    body: "Small-scale organic synthesis, recrystallization and vacuum filtration, TLC and melting-point analysis, lab safety and waste handling.",
  },
  {
    title: "Mechanical systems",
    body: "Pneumatics and pressure handling, gimbals and linkages, structural layout for load paths.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Who's building this" title="About" />

          <div className="prose-body mt-8 space-y-4 text-base">
            <p>
              I work across disciplines that usually sit in separate
              buildings. The same project might start as a parametric sketch
              in CAD, become a printed or welded part, get its behavior from
              a microcontroller reading analog sensors, and end with a bench
              measurement to prove it does what the design said it would.
            </p>
            <p>
              The wet-lab work runs on the same instinct: follow the
              mechanism, control the conditions, then verify the result
              against a standard instead of assuming it. Whether the output
              is a launcher, a crystalline solid, or an instrument that
              holds tune, the habit is the same — design deliberately, build
              it yourself, and measure the outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {skill.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
