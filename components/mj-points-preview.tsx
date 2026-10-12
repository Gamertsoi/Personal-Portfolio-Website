export default function MjPointsPreview() {
  return (
    <div
      className="mj-points-preview"
      role="img"
      aria-label="Sample preview of the Mahjong member points website showing an illustrative member lookup and point balance"
    >
      <span className="mj-preview-sample">SAMPLE</span>
      <div className="mj-preview-top">
        <span className="mj-preview-mark">雀</span>
        <span>會員積分查詢系統</span>
        <span className="mj-preview-status"><i /> ONLINE</span>
      </div>
      <div className="mj-preview-content">
        <span className="mj-preview-eyebrow">MEMBER LOOKUP</span>
        <strong>歡迎回來</strong>
        <span className="mj-preview-subtitle">輸入會員編號，查詢目前積分</span>
        <div className="mj-preview-form">
          <span>會員編號</span>
          <span>0008 <i>↗</i></span>
        </div>
        <div className="mj-preview-result">
          <span className="mj-preview-avatar">雀</span>
          <span className="mj-preview-member">
            <small>MEMBER · 0008</small>
            <strong>會員名稱</strong>
          </span>
          <span className="mj-preview-points"><small>目前積分</small><strong>128.5</strong></span>
        </div>
      </div>
    </div>
  );
}
