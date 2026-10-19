import { items as certifications } from '../content/certifications.json';

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications">
      <div className="reveal" style={{ marginBottom: '3rem' }}>
        <div className="section-tag">✦ Credentials</div>
        <h2 className="section-title">
          Licenses & <span>Certifications</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="achievements-grid cert-grid reveal">
        {certifications.map((cert, i) => (
          <div className="achievement-card cert-card" key={cert.title ?? i}>
            {cert.image ? (
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-thumb"
                aria-label={`View ${cert.title} certificate image`}
              >
                <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
              </a>
            ) : (
              <div className="achievement-icon">📜</div>
            )}
            <div className="achievement-body">
              <h3>{cert.title}</h3>
              <span className="cert-issuer">🏛 {cert.issuer}</span>
              {cert.date && <div className="achievement-date">🗓 {cert.date}</div>}
              {cert.credentialId && (
                <div className="cert-id">Credential ID: {cert.credentialId}</div>
              )}
              {(cert.url || cert.file) && (
                <div className="cert-links">
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                      ✔ Verify
                    </a>
                  )}
                  {cert.file && (
                    <a href={cert.file} target="_blank" rel="noopener noreferrer" className="cert-link">
                      📄 View PDF
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
