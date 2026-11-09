
function FolderCard({ folder, onClick }) {
  return (
    <article
      className="folder-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="folder-image">
        <img
          src={folder.image}
          alt={folder.title}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="folder-overlay">
          <span>OPEN FOLDER ↗</span>
        </div>
      </div>

      <div className="folder-info">
        <div>
          {folder.number && (
            <span className="folder-number">{folder.number}</span>
          )}

          <h3>{folder.title}</h3>
          <p>{folder.description || folder.subtitle}</p>
        </div>

        <span className="folder-arrow">↗</span>
      </div>
    </article>
  );
}

export default FolderCard;
