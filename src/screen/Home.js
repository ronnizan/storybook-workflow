import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Button from './../components/Button/Button';

const Home = () => {
  const [user, setUser] = useState();

  return (
    <div>
      <Header user={user} />
      <hr />

      {user ? (
        <h2>welcome {user.name}</h2>
      ) : (
        <Button login={setUser}>Login</Button>
      )}
    </div>
  );
};

export default Home;
