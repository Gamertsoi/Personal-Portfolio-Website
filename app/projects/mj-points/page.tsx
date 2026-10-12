import Link from "next/link";
import MjPointsPreview from "@/components/mj-points-preview";

const features = [
  {
    number: "01",
    title: "A simple member lookup",
    description:
      "Members enter their four-digit ID to see the matching account name and current point balance, without needing access to the spreadsheet.",
  },
  {
    number: "02",
    title: "An admin area for account and point management",
    description:
      "Administrators can sign in, create accounts with an automatically generated member ID, adjust a member’s points, and include a reason for each change.",
  },
  {
    number: "03",
    title: "A record of changes",
    description:
      "Account creation and point adjustments are recorded with a timestamp, administrator, affected member, old and new balance, and a reason. Admins can review the log in the web app.",
  },
];

const implementation = [
  {
    title: "Google Apps Script web app",
    description:
      "The server-side code is written in Google Apps Script. HtmlService renders the entry, member, and admin pages from HTML templates, while shared client-side JavaScript handles navigation between the app’s sections.",
  },
  {
    title: "Google Sheets as the datastore",
    description:
      "Apps Script reads and writes the member accounts, admin credentials, and change history in separate spreadsheet sheets. If the User or Log sheet is missing, the script creates it when needed.",
  },
  {
    title: "Calls between the page and server",
    description:
      "The browser uses google.script.run to call Apps Script functions for member lookup, admin sign-in, account creation, point changes, and log retrieval. Admin sessions use a token held in Apps Script’s cache, with a one-hour expiry.",
  },
];

export default function MjPointsPage() {
  return (
    <section className="project-detail-page content-width">
      <Link className="back-link" href="/projects">
        <span aria-hidden="true">←</span> ALL PROJECTS
      </Link>

      <div className="eyebrow"><span className="eyebrow-line" /> MEMBER POINTS WEB APP</div>
      <h1 className="inner-title">Membership <span className="name-highlight">Point System</span></h1>
      <p className="project-detail-intro">
        A Google Apps Script web app for a Mahjong club: members can look up their
        points, while administrators manage accounts and keep a record of changes.
      </p>

      <div className="mj-detail-preview">
        <MjPointsPreview />
        <span className="detail-preview-caption">MEMBER LOOKUP · SAMPLE ACCOUNT</span>
      </div>

      <div className="project-detail-copy">
        <div className="detail-section-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> MEMBER + ADMIN FLOWS</span>
          <h2>Points available to members.<br />Management for admins.</h2>
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
        <span className="eyebrow"><span className="eyebrow-line" /> HOW IT IS USED</span>
        <p>
          Members open the site and enter their ID to check a balance. Administrators
          sign in to create member accounts, update points with a reason, or review the
          change log.
        </p>
        <div className="workflow-steps">
          <span><b>01</b> Member looks up points</span>
          <i aria-hidden="true">→</i>
          <span><b>02</b> Admin manages accounts</span>
          <i aria-hidden="true">→</i>
          <span><b>03</b> Changes are logged</span>
        </div>
      </aside>

      <section className="build-notes">
        <div className="eyebrow"><span className="eyebrow-line" /> BEHIND THE BUILD</div>
        <h2>How it is built<span className="name-highlight">.</span></h2>
        <p className="build-notes-intro">
          I built the member and admin flows with Google Apps Script and HTML Service,
          using a Google Spreadsheet to keep account data and point-change records.
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
