import type { Metadata } from "next";
import { getAdjacentProjects, getProject } from "@/lib/projects";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectFooterNav from "@/components/ProjectFooterNav";
import SectionHeading from "@/components/SectionHeading";
import ReactionScheme from "@/components/ReactionScheme";
import Checklist from "@/components/Checklist";
import MediaPlaceholder from "@/components/MediaPlaceholder";

const project = getProject("acetaminophen-synthesis")!;
const { prev, next } = getAdjacentProjects("acetaminophen-synthesis");

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function AcetaminophenPage() {
  return (
    <>
      <ProjectHeader project={project} />

      <article className="prose-body mx-auto max-w-3xl px-6 py-16">
        <SectionHeading eyebrow="01 — Pathway" title="Reaction & mechanism" />
        <div className="mt-6 space-y-4">
          <p>
            A single-step acetylation, run end to end: reaction, workup,
            purification, and analytical confirmation that the white solid
            in the filter really is what the scheme says it is.
          </p>
          <p>
            The aromatic amine on 4-aminophenol is the nucleophile; acetic
            anhydride is the acylating agent. The amine attacks a carbonyl
            carbon, the tetrahedral intermediate collapses, and acetate
            leaves — giving the amide and acetic acid as by-product. Keeping
            the conditions mild and aqueous holds the reaction selective for
            the nitrogen, so the phenol is left untouched rather than
            reacting on to the ester.
          </p>
        </div>

        <div className="mt-8">
          <ReactionScheme />
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="02 — Bench work" title="Lab setup" />
          <p className="mt-6">
            Dissolution and reaction take place in a flask on a stirring hot
            plate, heated evenly through a water bath rather than direct
            contact. The product is isolated by vacuum filtration through a
            Büchner funnel, washed with cold water to carry off residual
            acid, and dried before any measurement is taken.
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="03 — Safety" title="Safety protocol" />
          <div className="mt-6">
            <Checklist
              items={[
                <>
                  <strong>Acetic anhydride</strong> handled in the fume hood
                  — corrosive, lachrymatory, and reacts with water.
                </>,
                "Goggles, nitrile gloves, and a lab coat worn throughout; gloves changed after any anhydride contact.",
                "Water bath used instead of an open flame — no ignition sources near the volatile workup.",
                "Acidic filtrate neutralized before disposal; solid waste kept separate and labeled.",
                "Product made as a synthesis and analysis exercise only — not pharmaceutical grade, and not for consumption.",
              ]}
            />
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="04 — Analysis" title="Purity verification" />
          <div className="mt-6">
            <Checklist
              items={[
                <>
                  <strong>Melting point.</strong> Literature value for pure
                  acetaminophen is 169–171 °C. A sharp range at that value
                  indicates clean product; a depressed, broadened range
                  points to residual starting material or solvent and calls
                  for a second recrystallization.
                </>,
                <>
                  <strong>TLC.</strong> Product spotted alongside
                  4-aminophenol and a commercial standard. A single spot
                  co-running with the standard, and the absence of the
                  starting-material spot, confirms the conversion went
                  through.
                </>,
              ]}
            />
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="05 — Documentation" title="Lab photos & scheme" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <MediaPlaceholder
              kind="image"
              note="Reaction flask on the stir plate in the water bath"
              caption="Photo — the setup mid-reaction."
            />
            <MediaPlaceholder
              kind="image"
              note="Vacuum filtration and the dried crystalline product"
              caption="Photo — Büchner funnel / product on a watch glass."
            />
            <MediaPlaceholder
              kind="scan"
              note="Developed TLC plate with Rf values marked"
              caption="Scan — plate photo or the drawn reaction scheme."
            />
            <MediaPlaceholder
              kind="image"
              note="Melting point apparatus reading at the transition"
              caption="Photo — melting-point determination."
            />
          </div>
        </div>
      </article>

      {prev && next && <ProjectFooterNav prev={prev} next={next} />}
    </>
  );
}
