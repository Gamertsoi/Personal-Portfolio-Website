import Link from "next/link";
import BroadcastPreview from "@/components/broadcast-preview";

const features = [
  {
    number: "01",
    title: "A live overlay for the broadcast",
    description:
      "Show the round, honba, riichi sticks, dora indicators, and all four players’ points in one clear graphic. Highlight the active camera player and identify the dealer and riichi status.",
  },
  {
    number: "02",
    title: "Match control in one place",
    description:
      "Set the match title, round, dealer, teams, and player details from the operator panel. Point calculations support Tsumo and Ron, with draw-game settlement, undo, and automatic round progression.",
  },
  {
    number: "03",
    title: "Flexible camera layouts",
    description:
      "Choose a four-player webcam setup or use one USB input for using hardwarecamera control panel. Assign USB devices or stream URLs and switch the active player during play.",
  },
];

const buildNotes = [
  {
    title: "Rebuilt for the browser",
    description:
      "I used the original C# Windows Forms Riichi Display as a reference, then recreated the system as a web app with Next.js, React, and TypeScript. Instead of porting the desktop UI, I built a browser-based operator console and a separate overlay page that can be added to OBS as a browser source.",
  },
  {
    title: "One shared match state",
    description:
      "The control panel reads and updates match data through Next.js API routes. The server stores the current state in a local JSON file, and the overlay checks for updates every 800 milliseconds so the broadcast reflects changes made by the operator. This keeps the current match in sync without a separate database or real-time messaging service.",
  },
  {
    title: "Scoring, standings, and cameras",
    description:
      "I implemented the Han/Fu point calculations, Tsumo and Ron payments, draw settlement, and round progression in TypeScript. I also added starting-score and match-point context to help viewers follow standings across rounds. Camera inputs support stream URLs or browser-permitted USB cameras, with a separate single-camera mode.",
  },
];

const comparisons = [
  {
    area: "Platform and setup",
    original: "C# Windows Forms desktop app, built and published with Visual Studio.",
    rebuild: "Next.js web app, run with Node.js and opened in a browser.",
  },
  {
    area: "Broadcast output",
    original: "Displays match information in a separate window or livestream overlay.",
    rebuild: "Provides a dedicated OBS browser overlay that shares match state with the control panel.",
  },
  {
    area: "Scoring and match control",
    original: "Provides the core score and match controls, including automatic score updates based on the winner condition and active-player switching.",
    rebuild: "Keeps the core scoring and match workflow, while adding pre-match score context so viewers can follow standings and understand strategic choices across multiple rounds.",
  },
  {
    area: "Camera workflow",
    original: "Only support USB camera sources.",
    rebuild: "Adds per-player URL source. Allows per-player USB camera sources and blackmagic mode(ATEM Camera Control Panel).",
  },
  {
    area: "Persistence",
    original: "Describes local match-detail logging for later review and recovery.",
    rebuild: "Persists the current shared match state in a JSON file; it does not currently provide the same match-history log.",
  },
];

export default function RiichiDisplayPage() {
  return (
    <section className="project-detail-page content-width">
      <Link className="back-link" href="/projects">
        <span aria-hidden="true">←</span> ALL PROJECTS
      </Link>

      <div className="eyebrow"><span className="eyebrow-line" /> BROADCAST CONTROL SYSTEM</div>
      <h1 className="inner-title">Riichi <span className="name-highlight">Display.</span></h1>
      <p className="project-detail-intro">
        A control panel and real-time broadcast overlay for Riichi Mahjong livestreams,
        designed to keep the match information and camera view together on screen.
      </p>

      <div className="detail-preview-frame">
        <BroadcastPreview />
        <span className="detail-preview-caption">BROADCAST OVERLAY · SAMPLE MATCH</span>
      </div>

      <div className="project-detail-copy">
        <div className="detail-section-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> HOW IT WORKS</span>
          <h2>Everything the stream needs,<br />in sync with the table.</h2>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <article className="detail-feature" key={feature.number}>
              <span className="detail-feature-number">{feature.number}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="project-workflow">
        <span className="eyebrow"><span className="eyebrow-line" /> STREAM WORKFLOW</span>
        <p>
          Configure players and match details in the control panel, then add the overlay
          page as a browser source in OBS. Changes are shared between the operator panel
          and the broadcast display.
        </p>
        <div className="workflow-steps">
          <span><b>01</b> Set up the match</span>
          <i aria-hidden="true">→</i>
          <span><b>02</b> Open the overlay in OBS</span>
          <i aria-hidden="true">→</i>
          <span><b>03</b> Run the broadcast</span>
        </div>
      </aside>

      <section className="comparison-section">
        <div className="eyebrow"><span className="eyebrow-line" /> A REBUILD, NOT A PORT</div>
        <h2>From a desktop app<br />to a browser-based system.</h2>
        <p className="comparison-intro">
          The original Riichi Display was created by nikmomo as a C# Windows Forms
          application. I rebuilt the idea with Next.js, keeping its livestream
          scoreboard purpose while adapting the workflow for a browser and OBS.
        </p>
        <div className="comparison-table" role="table" aria-label="Comparison of the original Riichi Display and my Next.js reconstruction">
          <div className="comparison-row comparison-header" role="row">
            <span role="columnheader">AREA</span>
            <span role="columnheader">ORIGINAL · C#</span>
            <span role="columnheader">MY REBUILD · NEXT.JS</span>
          </div>
          {comparisons.map((item) => (
            <div className="comparison-row" role="row" key={item.area}>
              <strong role="rowheader">{item.area}</strong>
              <p role="cell">{item.original}</p>
              <p role="cell">{item.rebuild}</p>
            </div>
          ))}
        </div>
        <p className="comparison-credit">
          Original project by{" "}
          <a href="https://github.com/nikmomo/Riichi-Display" target="_blank" rel="noreferrer">
            nikmomo on GitHub <span aria-hidden="true">↗</span>
          </a>
          . This is an independent reconstruction, not an official continuation.
        </p>
      </section>

      <section className="build-notes">
        <div className="eyebrow"><span className="eyebrow-line" /> BEHIND THE BUILD</div>
        <h2>How I built it<span className="name-highlight">.</span></h2>
        <p className="build-notes-intro">
          I rebuilt the original desktop project as a web-based broadcast system,
          keeping its core match-scoring purpose while reshaping how the operator
          controls the match and sends information to the stream.
        </p>
        <div className="build-notes-grid">
          {buildNotes.map((note) => (
            <article className="build-note" key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Link className="text-link detail-back-link" href="/projects">
        Back to all projects <span aria-hidden="true">→</span>
      </Link>
      <span className="page-index">02 / 03</span>
    </section>
  );
}
