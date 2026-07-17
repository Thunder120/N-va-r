export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#070708", color: "#F4F4F9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "3rem", fontWeight: 300, marginBottom: "1rem" }}>NOVAIR</h1>
      <p style={{ color: "#C8CCD4", marginBottom: "2rem" }}>The Essence of Rarity</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="/stock-1" style={{ color: "#F4F4F9", border: "1px solid rgba(255,255,255,0.2)", padding: "0.75rem 1.5rem", borderRadius: "999px", textDecoration: "none" }}>Stock 1</a>
        <a href="/stock-2" style={{ color: "#F4F4F9", border: "1px solid rgba(255,255,255,0.2)", padding: "0.75rem 1.5rem", borderRadius: "999px", textDecoration: "none" }}>Stock 2</a>
      </div>
    </div>
  );
}
