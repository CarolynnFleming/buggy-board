import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createGame } from './services/fetch-utils';

export default function CreatePage() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    await createGame(title, genre, designer, description, minPlayers, maxPlayers);

    history.push('/board-games');
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          <input required onChange={e => setTitle(e.target.value)} name='title' />
        </label>
        <label>
            Genre
          <select required onChange={e => setGenre(e.target.value)}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          <input required onChange={e => setDesigner(e.target.value)} name='designer' />
        </label>
        <label>
            Min Players
          <input required onChange={e => setMinPlayers(e.target.value)} name='min_players' />
        </label>
        <label>
            Max Players
          <input required onChange={e => setMaxPlayers(e.target.value)} name='max_players' />
        </label>
        <label>
            Description
          <textarea required onChange={e => setDescription(e.target.value)} name='max_players' />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
