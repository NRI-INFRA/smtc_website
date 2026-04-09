export default function PageHero({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <div className="page-hero">
      <div className="container">
        <div className="section-label">{label}</div>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-sub">{subtitle}</p>
      </div>
    </div>
  );
}
