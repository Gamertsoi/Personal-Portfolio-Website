import Link from "next/link";
import RailwayBotPreview from "@/components/railway-bot-preview";

const features = [
  {
    number: "01",
    title: "Role-gated server commands",
    description:
      "Set which Discord roles can use each command. The bot denies access by default and lets the configured owner manage command permissions.",
  },
  {
    number: "02",
    title: "Flexible role claiming",
    description:
      "Connect a reaction on a message to a Discord role, optionally require another role first, and let members claim roles using a button-based flow.",
  },
  {
    number: "03",
    title: "Useful server tools",
    description:
      "Send a message to a selected channel and clear messages with the bot. These tools are available as both prefix commands and Discord slash commands.",
  },
];

const implementation = [
  {
    title: "Discord.js event-driven bot",
    description:
      "The bot is written in CommonJS JavaScript for Node.js and uses discord.js v14. It listens for messages, slash-command interactions, button clicks, reactions, and deleted messages.",
  },
  {
    title: "Shared command handlers",
    description:
      "Prefix commands and slash commands route into the same command behavior, so message sending, cleanup, role mapping, and permission management stay consistent across both interfaces.",
  },
  {
    title: "Persistent configuration",
    description:
      "Command permissions and reaction-role mappings are saved in local JSON files and loaded when the bot starts. Optional GitHub syncing is available for those files; credentials are supplied through environment variables.",
  },
];

export default function RailwayBotPage() {
  return (
    <section className="project-detail-page content-width">
      <Link className="back-link" href="/projects">
        <span aria-hidden="true">←</span> ALL PROJECTS
      </Link>

      <div className="eyebrow"><span className="eyebrow-line" /> DISCORD SERVER BOT</div>
      <h1 className="inner-title">Discord <span className="name-highlight">Bot.</span></h1>
      <p className="project-detail-intro">
        A Discord server helper for managing roles, moderating channels, and controlling
        who can use bot commands.
      </p>

      <div className="bot-detail-preview">
        <RailwayBotPreview />
        <span className="detail-preview-caption">DISCORD BOT · SAMPLE INTERACTION</span>
      </div>

      <div className="project-detail-copy">
        <div className="detail-section-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> SERVER TOOLS</span>
          <h2>Helpful commands.<br />Roles under control.</h2>
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
        <span className="eyebrow"><span className="eyebrow-line" /> COMMAND WORKFLOW</span>
        <p>
          Configure command permissions, create a role-claim mapping, then let members
          interact with the bot using prefix commands, slash commands, reactions, or buttons.
        </p>
        <div className="workflow-steps">
          <span><b>01</b> Set command roles</span>
          <i aria-hidden="true">→</i>
          <span><b>02</b> Create role mappings</span>
          <i aria-hidden="true">→</i>
          <span><b>03</b> Members interact</span>
        </div>
      </aside>

      <section className="build-notes">
        <div className="eyebrow"><span className="eyebrow-line" /> BEHIND THE BUILD</div>
        <h2>How it is built<span className="name-highlight">.</span></h2>
        <p className="build-notes-intro">
          I built the bot around a small set of reusable command handlers and Discord
          events, with configuration saved between restarts.
        </p>
        <div className="build-notes-grid">
          {implementation.map((item) => (
            <article className="build-note" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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
