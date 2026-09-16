export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  tags: string[];
  discipline: string;
  accent: "teal" | "violet";
  coverImage?: string;
  specs: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "potato-cannon",
    title: "Mechanical Potato Cannon",
    shortTitle: "Potato Cannon",
    tagline: "A gear-driven, two-axis launcher mount aimed by a microcontroller, not by eye.",
    description:
      "A wooden two-axis positioning frame with 3D-printed, 10:1-reduction gearing: two potentiometers feed an Arduino, which drives a pair of servos to sweep the launcher through azimuth and elevation.",
    tags: ["C++", "Arduino", "CAD", "Mechanical Design"],
    discipline: "Mechanical / Embedded",
    accent: "teal",
    coverImage: "/images/potato-cannon/photo-1.jpg",
    specs: [
      { label: "Frame", value: "Wooden supports, geared base" },
      { label: "Drive", value: "2 × servo, 10:1 gear reduction" },
      { label: "MCU", value: "Arduino Nano (ATmega328P)" },
      { label: "Input", value: "2 × 10kΩ linear potentiometers" },
    ],
  },
  {
    slug: "acetaminophen-synthesis",
    title: "Acetaminophen Synthesis",
    shortTitle: "Acetaminophen Synthesis",
    tagline: "An organic synthesis run start to finish, with the analysis to prove it.",
    description:
      "A single-step N-acetylation of 4-aminophenol carried through reaction, workup, recrystallization, and analytical verification by melting point and TLC against a known standard.",
    tags: ["Organic Chemistry", "Wet Lab", "TLC", "Recrystallization"],
    discipline: "Organic Chemistry",
    accent: "violet",
    coverImage: "/images/acetaminophen-synthesis/photo-2.jpg",
    specs: [
      { label: "Target", value: "Acetaminophen, C₈H₉NO₂" },
      { label: "Route", value: "N-acetylation of 4-aminophenol" },
      { label: "Purification", value: "Recrystallization, hot water" },
      { label: "Verification", value: "Melting point + TLC" },
    ],
  },
  {
    slug: "3d-printing-cad",
    title: "CAD Design & 3D Printing",
    shortTitle: "CAD & 3D Printing",
    tagline: "Parts drawn from scratch in CAD, then printed until they matched the sketch.",
    description:
      "Custom parts modeled from a blank sketch rather than downloaded — including a fully playable, fully 3D-printed ukulele and a chamfered Mercedes-Benz keychain, each pushing a different constraint of FDM printing.",
    tags: ["CAD", "3D Printing", "FDM", "Product Design"],
    discipline: "CAD / Additive Manufacturing",
    accent: "violet",
    coverImage: "/images/3d-printing-cad/photo-1.jpg",
    specs: [
      { label: "Modeled in", value: "Parametric CAD, sketch-driven" },
      { label: "Process", value: "FDM, 0.4mm nozzle" },
      { label: "Builds", value: "Ukulele, MB star keychain" },
      { label: "Material", value: "PLA / PLA+" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
