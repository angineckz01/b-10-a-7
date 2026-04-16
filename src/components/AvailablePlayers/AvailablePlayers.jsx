import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const players = use(playersPromise)
    console.log(players);
    return (
        <div>
            
        </div>
    );
};

export default AvailablePlayers;