export default function RailwayBotPreview() {
  return (
    <div
      className="railway-bot-preview"
      role="img"
      aria-label="Sample Discord bot preview showing a role claim button, moderation commands, and role permissions"
    >
      <div className="bot-preview-sidebar">
        <span className="bot-server-icon">G</span>
        <span className="bot-sidebar-icon bot-sidebar-active">#</span>
        <span className="bot-sidebar-icon">#</span>
        <span className="bot-sidebar-icon">◉</span>
      </div>
      <div className="bot-preview-main">
        <div className="bot-preview-channel">
          <span>#</span> roles-and-tools <i>BOT ONLINE</i>
        </div>
        <div className="bot-preview-message bot-user-message">
          <span className="bot-preview-avatar user-avatar">M</span>
          <span><strong>member</strong><small>Can I get the event role?</small></span>
        </div>
        <div className="bot-preview-message">
          <span className="bot-preview-avatar bot-avatar">D</span>
          <span className="bot-message-content">
            <strong>Discord Bot <small>APP</small></strong>
            <small>Tap below to claim your role.</small>
            <span className="bot-claim-button"><i>✓</i> Claim Event Role</span>
          </span>
        </div>
        <div className="bot-command-list">
          <span><b>/set</b> Configure command access</span>
          <span><b>/msg</b> Send a channel message</span>
          <span><b>/clr</b> Clear channel messages</span>
        </div>
      </div>
      <span className="bot-preview-sample">SAMPLE</span>
    </div>
  );
}
