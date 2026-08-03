export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <a href="/" style={{ fontWeight: 700, textDecoration: "none", color: "inherit" }}>
        Brand
      </a>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="#features" style={{ textDecoration: "none", color: "inherit" }}>
          Features
        </a>
        <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
          About
        </a>
        <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
