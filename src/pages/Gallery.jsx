import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('crewmates')
        .select()
        .order('created_at', { ascending: false });
      setCrewmates(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h1 style={{ color: "#2e7d32" }}>Gallery</h1>
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          margin: "0 auto"
        }}
      >
        {crewmates.length === 0 && (
          <p style={{ textAlign: "center", color: "#888" }}>No players yet. Add one!</p>
        )}
        {crewmates.map(c => (
          <div key={c.id} className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={`https://api.dicebear.com/8.x/bottts/svg?seed=${encodeURIComponent(c.name)}`}
              alt={c.name}
              style={{ width: 80, height: 80, borderRadius: "50%", border: "2px solid #2e7d32", marginBottom: 12 }}
            />
            <Link
              to={`/detail/${c.id}`}
              style={{ fontSize: "1.2rem", color: "#2e7d32", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }}
            >
              {c.name}
            </Link>
            <p style={{ margin: "0.5rem 0" }}>{c.role} | {c.strength}</p>
            <div>
              <Link to={`/detail/${c.id}`} className="button">View</Link>
              <Link to={`/edit/${c.id}`} className="button" style={{ marginLeft: 8 }}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}