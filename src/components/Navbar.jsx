import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "flex-start", // Move nav to left
      alignItems: "center",
      background: "#1e3d59", // Soccer dark blue
      padding: "1rem 2rem",
      marginBottom: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
    }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/861/861512.png"
        alt="Soccer Ball"
        style={{ width: 32, height: 32, marginRight: 16 }}
      />
      <Link to="/" style={{ color: "white", margin: "0 1rem", fontWeight: "bold", fontSize: "1.1rem" }}>Home</Link>
      <Link to="/gallery" style={{ color: "white", margin: "0 1rem", fontSize: "1.1rem" }}>Players</Link>
      <Link to="/create" style={{ color: "white", margin: "0 1rem", fontSize: "1.1rem" }}>Add Player</Link>
    </nav>
  );
}
