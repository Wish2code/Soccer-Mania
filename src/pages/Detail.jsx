import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Layout from '../components/Layout';

export default function Detail() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single();
      setPlayer(data);
    };
    fetchPlayer();
  }, [id]);

  if (!player) return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  );

  // Example of extra info: creation date, id, and a fun fact
  return (
    <Layout>
      <div className="card" style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
        <img
          src={`https://api.dicebear.com/8.x/bottts/svg?seed=${encodeURIComponent(player.name)}`}
          alt={player.name}
          style={{ width: 100, height: 100, borderRadius: "50%", border: "2px solid #2e7d32", marginBottom: 16 }}
        />
        <h2 style={{ color: "#1e3d59" }}>{player.name}</h2>
        <p><strong>Position:</strong> {player.role}</p>
        <p><strong>Skill:</strong> {player.strength}</p>
        <p><strong>Player ID:</strong> {player.id}</p>
        <p><strong>Created:</strong> {new Date(player.created_at).toLocaleString()}</p>
        <p style={{ color: "#888", fontStyle: "italic" }}>
          {player.role === "Goalkeeper" ? "The last line of defense!" : "Ready to score some goals!"}
        </p>
        <Link to={`/edit/${player.id}`} className="button" style={{ marginTop: 16 }}>Edit Player</Link>
      </div>
    </Layout>
  );
}
