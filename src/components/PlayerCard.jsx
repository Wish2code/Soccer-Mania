import { Link } from 'react-router-dom';

export default function PlayerCard({ player }) {
  return (
    <div className="card">
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p>Special Skill: {player.skill}</p>
      <div>
        <Link to={`/detail/${player.id}`}>Details</Link> |{" "}
        <Link to={`/edit/${player.id}`}>Edit</Link>
      </div>
    </div>
  );
}
