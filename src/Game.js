import { Link } from 'react-router-dom';

export default function Game({
  game: {
    id,
    title, 
    designer, 
    genre,
    min_players, 
    max_players,
  }
}) {
  return (
    <Link to={`/board-games/${id}`}>
      <div className='game'>
        <h3>{title}</h3>
        <p>A {genre} game by designer {designer}</p>
        <p>for {min_players} - {max_players} players</p>
      </div>

    </Link>
  );
}
