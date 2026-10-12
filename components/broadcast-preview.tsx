import Image from "next/image";

export default function BroadcastPreview() {
  return (
    <div
      className="broadcast-preview"
      role="img"
      aria-label="Sample preview of the Riichi Display broadcast overlay, with illustrative match status in the top-left and four player score cards along the bottom"
    >
      <span className="broadcast-preview-sample">SAMPLE</span>
      <div className="preview-status">
        <span className="preview-match-title">Riichi Mahjong Match</span>
        <div className="preview-match-info">
          <span className="preview-round">東4局</span>
          <span className="preview-sticks">
            <span><Image src="/projects/riichi-display/stick-1000.png" alt="" width={1134} height={136} loading="eager" />1</span>
            <span><Image src="/projects/riichi-display/stick-100.png" alt="" width={1134} height={136} loading="eager" />12</span>
          </span>
        </div>
        <Image
          className="preview-dora"
          src="/projects/riichi-display/green-dragon.png"
          alt=""
          width={120}
          height={170}
          loading="eager"
        />
      </div>

      <div className="preview-player-row">
        <div className="preview-score-card preview-riichi">
          <span className="preview-avatar" aria-hidden="true">🧑🏻‍🦱</span>
          <span className="preview-dealer">親</span>
          <span className="preview-player-info">
            <strong>Player 1</strong>
            <small>Start +0.0</small>
            <small className="preview-match-points">Match +41.9</small>
          </span>
          <strong className="preview-points">51,900</strong>
        </div>
        <div className="preview-score-card">
          <span className="preview-avatar" aria-hidden="true">🧑🏻‍🦱</span>
          <span className="preview-player-info">
            <strong>Player 2</strong>
            <small>Start +0.0</small>
            <small className="preview-match-points">Match -39.9</small>
          </span>
          <strong className="preview-points">100</strong>
        </div>
        <div className="preview-score-card">
          <span className="preview-avatar" aria-hidden="true">🧑🏻‍🦱</span>
          <span className="preview-player-info">
            <strong>Player 3</strong>
            <small>Start +0.0</small>
            <small className="preview-match-points">Match -1.5</small>
          </span>
          <strong className="preview-points">23,500</strong>
        </div>
        <div className="preview-score-card">
          <span className="preview-avatar" aria-hidden="true">🧑🏻‍🦱</span>
          <span className="preview-player-info">
            <strong>Player 4</strong>
            <small>Start +0.0</small>
            <small className="preview-match-points">Match -1.5</small>
          </span>
          <strong className="preview-points">23,500</strong>
        </div>
      </div>
    </div>
  );
}
