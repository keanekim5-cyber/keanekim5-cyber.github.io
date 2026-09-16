import type { Metadata } from "next";
import { getAdjacentProjects, getProject } from "@/lib/projects";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectFooterNav from "@/components/ProjectFooterNav";
import SectionHeading from "@/components/SectionHeading";
import MediaPlaceholder from "@/components/MediaPlaceholder";

const project = getProject("3d-printing-cad")!;
const { prev, next } = getAdjacentProjects("3d-printing-cad");

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function CadPrintingPage() {
  return (
    <>
      <ProjectHeader project={project} />

      <article className="prose-body mx-auto max-w-3xl px-6 py-16">
        <SectionHeading eyebrow="01 — Process" title="Design, then print" />
        <div className="mt-6 space-y-4">
          <p>
            Every part here is drawn from a blank sketch in CAD — nothing
            downloaded — then sliced, printed, and iterated until the
            physical part matched what the model promised. Most of the real
            work happens before the printer starts: deciding where a part
            splits across the build volume, which surfaces have to be
            dimensionally honest, and which way the layer lines should run
            for the load the part will actually carry.
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="02 — Build" title="Fully 3D-printed ukulele" />
          <div className="mt-6 space-y-4">
            <p>
              A playable soprano ukulele, modeled as an assembly rather than
              a single body. At a roughly 350&nbsp;mm scale length, the
              instrument is far longer than any hobby build plate, so the
              body and neck are split into printable sections joined on
              registered mating faces — alignment pins plus a glued lap
              joint at the heel — positioned so the seams fall where the
              instrument is stiffest, not across the soundboard.
            </p>
            <p>
              <strong>Acoustic resonance drove the wall design.</strong> A
              solid printed shell is too dead and too heavy, so the body is
              a thin-walled resonant box: the soundboard prints thin with
              internal ribbing to stay stiff under string tension without
              damping the panel, while the back and sides print thicker for
              a rigid enclosure. Infill stays low so the cavity remains a
              cavity instead of a solid block. Layer orientation runs along
              the neck&apos;s length so string tension pulls along the layers
              rather than trying to peel them apart, and the neck carries an
              internal channel for a stiffening rod. Bridge and nut print as
              separate, dense parts, so the string break angle can be tuned
              without reprinting the whole body.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="03 — Build" title="Mercedes-Benz star keychain" />
          <div className="mt-6 space-y-4">
            <p>
              A small, precise piece modeled as an exercise in relief and
              tolerance: the three-pointed star drawn as a sketch, then
              revolved and extruded into a chamfered ring relief, with a
              filleted lanyard hole sized to clear a standard split ring.
            </p>
            <p>
              Printed at a fine layer height with the face flat on the bed,
              so the top surface comes off the plate clean, and finished as
              a two-color part by pausing the print for a filament swap at
              the layer where the star meets the surrounding field. A
              personal, non-commercial print — not affiliated with or
              endorsed by Mercedes-Benz.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="04 — Documentation" title="Renders & finished parts" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <MediaPlaceholder
              kind="render"
              note="Ukulele assembly — shaded view and exploded sections"
              caption="CAD render — viewport render or a dimensioned drawing."
            />
            <MediaPlaceholder
              kind="image"
              note="Printed ukulele, assembled and strung"
              caption="Photo — the finished instrument."
            />
            <MediaPlaceholder
              kind="render"
              note="Keychain — top face and chamfer detail"
              caption="CAD render — model render, front-on."
            />
            <MediaPlaceholder
              kind="image"
              note="Printed keychain in hand, showing surface finish"
              caption="Photo — the printed part."
            />
          </div>
          <div className="mt-6">
            <MediaPlaceholder
              kind="video"
              note="Optional: print timelapse, or the ukulele being played"
              caption="Video — optional; remove this block if unused."
              wide
            />
          </div>
        </div>
      </article>

      {prev && next && <ProjectFooterNav prev={prev} next={next} />}
    </>
  );
}
