
function ArtworkCard({ work }) {
  return (
    <article className="art-card">
      <div className="art-image">
        {work.video && typeof work.video === "string" ? (
          <video
            src={work.video}
            muted
            loop
            autoPlay
            playsInline
          />
        ) : (
          <img
            src={work.image}
            alt={work.title}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}

        <div className="art-overlay">
          <span>VIEW ARTWORK ↗</span>
        </div>
      </div>

      <div className="art-info">
        <div>
          <h3>{work.title}</h3>
          <p>{work.category}</p>
        </div>

        {work.number && (
          <span className="art-number">{work.number}</span>
        )}
      </div>
    </article>
  );
}

export default ArtworkCard;
