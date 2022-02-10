import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({
  setUser
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
      
    const user = signIn(email, password);

    setUser(user);
  }
    
  async function handleSignUp() {

    const user = signUp(email, password);

    setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      <form onSubmit={handleSignIn}>
        <label>
            Email
          <input required type="email" onChange={setEmail(e.target.value)} name="email" />
        </label>
        <label>
            Password
          <input required type="password" onChange={setPassword(e.target.value)} name="password" />
        </label>
        <button>Sign In</button>
        <button type="button" onClick={handleSignUp} >Sign Up</button>
      </form>
    </div>
  );
}
