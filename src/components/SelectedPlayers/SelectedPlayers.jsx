import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({selectedPlayers}) => {
    // console.log(selectedPlayers);
    return (
        <div>
            {
                selectedPlayers.map(player => <SelectedCard 
                    key={player.id}
                    player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;