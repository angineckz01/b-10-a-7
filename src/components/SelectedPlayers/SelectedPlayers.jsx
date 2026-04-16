import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
    return (
        <div>
            {
                selectedPlayers.map(player => <SelectedCard 
                    key={player.id}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    setCoin={setCoin}
                    coin={coin}
                    player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;