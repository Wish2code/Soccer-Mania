import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Home() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('crewmates')
        .select()
        .order('created_at', { ascending: false });
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h1 style={{ color: "#1e3d59", marginBottom: "1.5rem" }}>Your Soccer Players</h1>
      <Link to="/create" className="button" style={{ marginBottom: "2rem" }}>Add New Player</Link>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {players.length === 0 && (
          <p style={{ textAlign: "center", color: "#888" }}>No players yet. Add one!</p>
        )}
        {players.map(p => (
          <div key={p.id} className="card" style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
            <img
              src={`https://api.dicebear.com/8.x/bottts/svg?seed=${encodeURIComponent(p.name)}`}
              alt={p.name}
              style={{ width: 64, height: 64, borderRadius: "50%", marginRight: "1.5rem", border: "2px solid #1e3d59" }}
            />
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: "1.2rem", color: "#1e3d59", fontWeight: "bold" }}>{p.name}</span>
              <p style={{ margin: "0.5rem 0" }}>{p.role} | {p.strength}</p>
              <button
                className="button"
                style={{ padding: "0.3rem 1rem", fontSize: "0.95rem" }}
                onClick={() => navigate('/gallery')}
              >
                Edit in Players
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
