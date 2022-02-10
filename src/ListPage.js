import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetch() {
      const fetchedGames = await getGames();

      setGames(fetchedGames);
    }
    
    fetch();
  }, []);
  return (
    <div className='list games'>
      { games.map(game => <Game key={game.id} game={game}/>)}
    </div>
  );
}
