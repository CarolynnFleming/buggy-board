import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function DetailPage() {
  const match = useRouteMatch();
  const [game, setGame] = useState({});

  useEffect(() => {
    async function fetch() {
      const gameResponse = await getGameById(id);

      setGame(gameResponse);
    }

    fetch();
  }, [match]);

  return (
    <div className='detail'>
      <h1>{title}</h1>
      <h2>A {genre} game for {min_players} to {max_players} players</h2>
      <h3>by celebrated designer {designer}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}
