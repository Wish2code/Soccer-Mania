import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Create() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [strength, setStrength] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').insert({ name, role, strength });
    navigate('/');
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="card" style={{ width: 350 }}>
        <h2 style={{ color: "#1e3d59" }}>Add Soccer Player</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Player Name" required />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Position</option>
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Forward">Forward</option>
        </select>
        <select value={strength} onChange={(e) => setStrength(e.target.value)} required>
          <option value="">Select Skill</option>
          <option value="Speed">Speed</option>
          <option value="Passing">Passing</option>
          <option value="Shooting">Shooting</option>
          <option value="Defense">Defense</option>
        </select>
        <button type="submit" className="button">Add Player</button>
      </form>
    </Layout>
  );
}
