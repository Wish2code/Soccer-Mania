import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Layout from '../components/Layout';

export default function Edit() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single();
      setPlayer(data);
    };
    fetchPlayer();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').update(player).eq('id', id);
    navigate(`/detail/${id}`);
  };

  const handleDelete = async () => {
    await supabase.from('crewmates').delete().eq('id', id);
    navigate('/gallery');
  };

  if (!player) return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  );

  return (
    <Layout>
      <form onSubmit={handleUpdate} className="card" style={{ width: 350, margin: "2rem auto" }}>
        <h2 style={{ color: "#1e3d59" }}>Edit Soccer Player</h2>
        <input
          value={player.name}
          onChange={(e) => setPlayer({ ...player, name: e.target.value })}
          placeholder="Player Name"
          required
        />
        <select
          value={player.role}
          onChange={(e) => setPlayer({ ...player, role: e.target.value })}
          required
        >
          <option value="">Select Position</option>
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Forward">Forward</option>
        </select>
        <select
          value={player.strength}
          onChange={(e) => setPlayer({ ...player, strength: e.target.value })}
          required
        >
          <option value="">Select Skill</option>
          <option value="Speed">Speed</option>
          <option value="Passing">Passing</option>
          <option value="Shooting">Shooting</option>
          <option value="Defense">Defense</option>
        </select>
        <button type="submit" className="button">Update Player</button>
        <button
          type="button"
          className="button"
          style={{ background: "#c62828", marginLeft: 8 }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </form>
    </Layout>
  );
}
