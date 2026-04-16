import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {
    const players = use(playersPromise)
    // console.log(players);
    return (
        <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2'>
            {
                players.map(player => <PlayerCard 
                    key={player.id} 
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    player={player} />)
            }
        </div>
    );
};

export default AvailablePlayers;