import type { Metadata } from "next";
import { getAdjacentProjects, getProject } from "@/lib/projects";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectFooterNav from "@/components/ProjectFooterNav";
import SectionHeading from "@/components/SectionHeading";
import CodeBlock from "@/components/CodeBlock";
import MediaPlaceholder from "@/components/MediaPlaceholder";

const project = getProject("potato-cannon")!;
const { prev, next } = getAdjacentProjects("potato-cannon");

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

const aimingCode = `
#include <Servo.h>
Servo myServo1;
Servo myServo2;
const int potPin1 = A0;
int currentSpeed1 = 90;

const int potPin2 = A1;
int currentSpeed2 = 90;

void setup() {
  myServo1.attach(9);
  myServo2.attach(10);
  myServo1.write(90);
  myServo2.write(90);
}

void loop() {
int potValue = analogRead(potPin1);


  if (potValue > 530) {
    currentSpeed1 = map(potValue, 531, 1023, 91, 180);
  }
  else if (potValue < 490) {
    currentSpeed1 = map(potValue, 0, 489, 0, 89);
  }

int potValue2 = analogRead(potPin2);

  if (potValue2 > 530) {
    currentSpeed2 = map(potValue2, 531, 1023, 91, 180);
  }
  else if (potValue2 < 490) {
    currentSpeed2 = map(potValue2, 0, 489, 0, 89);
  }

  myServo1.write(currentSpeed1);
  myServo2.write(currentSpeed2);
  delay(15);
}
`;

export default function PotatoCannonPage() {
  return (
    <>
      <ProjectHeader project={project} />

      <article className="prose-body mx-auto max-w-3xl px-6 py-16">
        <SectionHeading eyebrow="01 — Structure" title="Wooden frame & geared positioning" />
        <div className="mt-6 space-y-4">
          <p>
            The launcher is mounted on a wooden two-axis positioning frame
            built around a large 3D-printed base gear. Two vertical wooden
            supports hold the cylindrical launcher using custom-designed
            clamps that fit into drilled mounting holes in the supports.
            This arrangement allows the launcher to pivot for elevation
            while the entire upper assembly rotates about the vertical axis.
          </p>
          <p>
            The azimuth axis uses a large horizontally mounted base gear
            with a smaller custom 3D-printed gear driven by a servo motor.
            The 10:1 gear reduction increases the available output torque
            while reducing rotational speed, allowing the servo to move the
            larger assembly in a controlled manner.
          </p>
          <p>
            The elevation axis uses a partial gear attached directly to the
            side of the launcher. A second servo drives this gear through
            another custom-designed smaller gear, again using a gear
            reduction to provide greater torque for moving and positioning
            the launcher.
          </p>
          <p>
            The structure combines 3D-printed PLA components with wooden
            supports, with the gears and mounting components designed in
            Onshape.
          </p>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="02 — Electronics" title="Potentiometer-controlled servo positioning" />
          <div className="mt-6 space-y-4">
            <p>
              The positioning system is controlled by an Arduino programmed
              in C++. Two potentiometers provide user input, with each
              potentiometer corresponding to one axis of movement.
            </p>
            <p>
              The Arduino reads the potentiometer positions and uses them
              to control two servo motors. One servo drives the base gear
              for rotation, while the second drives the side-mounted
              partial gear for elevation. This allows the user to
              independently control the launcher&apos;s position along the
              two axes.
            </p>
            <p>
              The electronics and mechanical components are integrated into
              a single system, allowing the potentiometer inputs to be
              translated into servo movement and giving the mechanism
              approximately 360° of rotational movement on its base axis.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="03 — Firmware" title="Control code" />
          <p className="mt-6">
            The full aiming sketch: two potentiometers, a centered dead
            zone, and a speed value written to each servo every loop.
          </p>
          <div className="mt-6">
            <CodeBlock code={aimingCode} filename="potato_cannon.ino" />
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="04 — Documentation" title="Aiming & firing" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <MediaPlaceholder
              kind="image"
              note="Full frame — wooden supports, base gear, and mounted launcher"
              caption="Photo — the assembled positioning rig."
            />
            <MediaPlaceholder
              kind="render"
              note="Onshape assembly — base gear, elevation gear, and mounts"
              caption="CAD render — gear train and clamp detail."
            />
          </div>
          <div className="mt-6">
            <MediaPlaceholder
              kind="video"
              note="Demonstration: aiming sweep across both axes, then a test fire"
              caption="Video — drop in a <video> tag or an embedded player."
              wide
            />
          </div>
        </div>
      </article>

      {prev && next && <ProjectFooterNav prev={prev} next={next} />}
    </>
  );
}
