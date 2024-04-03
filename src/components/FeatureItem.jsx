export default function FeatureItem({feat}) {

  return (
        <div className="feature-item">
          <img src={`src/assets/img/${feat.img}.png`} alt={feat.alt} className="feature-icon" />
          <h3 className="feature-item-title">{feat.title}</h3>
          <p>
          {feat.text}
          </p>
        </div>
  );
}
