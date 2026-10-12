import Link from "next/link";
import BroadcastPreview from "@/components/broadcast-preview";
import MjPointsPreview from "@/components/mj-points-preview";
import RailwayBotPreview from "@/components/railway-bot-preview";

export default function ProjectsPage() {
  return (
    <section className="inner-page content-width">
      <div className="eyebrow"><span className="eyebrow-line" /> THINGS I&apos;VE MADE</div>
      <h1 className="inner-title">My <span className="name-highlight">projects</span></h1>
      <p className="inner-description">
        A collection of software and hardware projects I&apos;ve made.
      </p>
      <Link
        className="project-card"
        href="/projects/riichi-display"
        aria-label="View details about the Riichi Display broadcast control system"
      >
        <article>
          <div className="project-overview">
            <BroadcastPreview />
            <div className="project-details">
              <div className="project-tags">
                <span>SOFTWARE</span>
                <span>NEXT.JS</span>
                <span>LIVE BROADCAST</span>
              </div>
              <h2>Riichi Display</h2>
              <p className="project-description">
                A control panel and real-time broadcast overlay for Riichi Mahjong
                livestreams, designed to keep the match information and camera view
                together on screen.
              </p>
            </div>
          </div>
          <div className="project-capabilities">
            <div>
              <span className="capability-mark">01</span>
              <p><strong>Live overlay</strong><br />Four-player scores, round details, dealer, riichi, and dora indicators.</p>
            </div>
            <div>
              <span className="capability-mark">02</span>
              <p><strong>Match control</strong><br />Calculate wins and draws, track points, and progress through rounds.</p>
            </div>
            <div>
              <span className="capability-mark">03</span>
              <p><strong>Camera setup</strong><br />Switch between a four-camera layout and a single-camera display.</p>
            </div>
          </div>
          <div className="project-footnote">
            <span><i /> CONTROL PANEL + OBS OVERLAY</span>
            <span>VIEW PROJECT <b aria-hidden="true">↗</b></span>
          </div>
        </article>
      </Link>
      <Link
        className="project-card"
        href="/projects/mj-points"
        aria-label="View details about the Mahjong member points website"
      >
        <article>
          <div className="project-overview">
            <MjPointsPreview />
            <div className="project-details">
              <div className="project-tags">
                <span>SOFTWARE</span>
                <span>GOOGLE APPS SCRIPT</span>
                <span>Management System</span>
              </div>
              <h2>Membership Point System</h2>
              <p className="project-description">
                A web app for members to check their points and for administrators
                to manage accounts, update balances, and review point-change history.
              </p>
            </div>
          </div>
          <div className="project-capabilities">
            <div>
              <span className="capability-mark">01</span>
              <p><strong>Member lookup</strong><br />Look up an account by member ID and view its current balance.</p>
            </div>
            <div>
              <span className="capability-mark">02</span>
              <p><strong>Admin tools</strong><br />Create member accounts and add or deduct points.</p>
            </div>
            <div>
              <span className="capability-mark">03</span>
              <p><strong>Change history</strong><br />Keep an administrator log of account and point changes.</p>
            </div>
          </div>
          <div className="project-footnote">
            <span><i /> APPS SCRIPT + GOOGLE SHEETS</span>
            <span>VIEW PROJECT <b aria-hidden="true">↗</b></span>
          </div>
        </article>
      </Link>
      <Link
        className="project-card"
        href="/projects/railway-bot"
        aria-label="View details about the Discord bot"
      >
        <article>
          <div className="project-overview">
            <RailwayBotPreview />
            <div className="project-details">
              <div className="project-tags">
                <span>SOFTWARE</span>
                <span>NODE.JS</span>
                <span>DISCORD.JS</span>
              </div>
              <h2>Discord Bot</h2>
              <p className="project-description">
                A Discord bot for server moderation and role management, with role-gated
                commands, button-based role claims, and persistent bot settings.
              </p>
            </div>
          </div>
          <div className="project-capabilities">
            <div>
              <span className="capability-mark">01</span>
              <p><strong>Role claims</strong><br />Let members claim mapped roles with reactions or buttons.</p>
            </div>
            <div>
              <span className="capability-mark">02</span>
              <p><strong>Moderation tools</strong><br />Send channel messages and clear messages with bot commands.</p>
            </div>
            <div>
              <span className="capability-mark">03</span>
              <p><strong>Access control</strong><br />Restrict commands by server role, with an owner override.</p>
            </div>
          </div>
          <div className="project-footnote">
            <span><i /> DISCORD BOT · PREFIX + SLASH COMMANDS</span>
            <span>VIEW PROJECT <b aria-hidden="true">↗</b></span>
          </div>
        </article>
      </Link>
      <div className="projects-bottom">
        <Link className="text-link" href="/">Back to the introduction <span aria-hidden="true">→</span></Link>
      </div>
      <span className="page-index">02 / 03</span>
    </section>
  );
}
