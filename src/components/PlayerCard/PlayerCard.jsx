import React, { useState } from "react";

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const [selected, setSelected] = useState(false);
    const handleSelectedPlayer = () => {
        if(selectedPlayers.length >= 6){
            alert('You can select maximum 6 players');
            return;
        }
        if(coin < player.price){
            alert('Not enough coin to select this player');
            return;
        }
        setSelected(true);
        setCoin(coin - player.price);
        setSelectedPlayers(prev => [...prev, player])
    };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
          className="h-64 w-full object-cover"
            src={player.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{player.name}</h2>
          <small className="bg-sky-300 text-white p-2 rounded-lg">{player.country}</small>
          <p>Price: $ {player.price}</p>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button onClick={()=> handleSelectedPlayer(player)} 
            className="btn btn-primary" disabled={selected}>{selected? 'Selected': 'Choose Player'} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
