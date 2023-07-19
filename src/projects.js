import React from 'react';
import Navbar from './Navbar';
import Games from './games';
import GamesList from './gamesList';

const SectionPage = () => {
  return (
    <div>
      <Navbar />
      <Games />
      <GamesList />
    </div>
  );
};

export default SectionPage;
