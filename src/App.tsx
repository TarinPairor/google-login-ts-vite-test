import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';

import Login from './components/Login';
import Home from './components/Home';
import useFirebaseConfig from './Firebase/Firebase';

import './App.css';

function App() {
  const { auth } = useFirebaseConfig();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  console.log(user);

  return (
    <div className="app">
      {user ? <Home user={user} /> : <Login />}
    </div>
  );
}

export default App;
