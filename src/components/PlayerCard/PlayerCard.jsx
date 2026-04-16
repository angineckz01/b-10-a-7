import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const [selected, setSelected] = useState(false);
    const handleSelectedPlayer = (player) => {
        if(selectedPlayers.length >= 6){
            toast.error(<span><p className="font-bold text-red-400">You can select maximum 6 players</p></span>);
            return;
        }
        if(coin < player.price){
            toast.error(<span><p className="font-bold text-red-400">Not enough coin to select this player</p></span>);
            return;
        }
        if(selectedPlayers.includes(player)){
            toast.error(<span><p className="font-bold text-red-400">Player already selected</p></span>);
            return;
        }
        setSelected(true);
        setCoin(coin - player.price);
        setSelectedPlayers(prev => [...prev, player])
        toast.success(<span><p className="font-bold text-blue-400">{player.name}</p> selected successfully</span>);
        // console.log('player and selected players', player, `${selectedPlayers.length}`);
    };
  return (
    <div>
      <div className="border border-gray-400 rounded-2xl bg-slate-100 p-5 space-y-4">
        <figure>
          <img
          className="h-64 w-full object-cover rounded-lg"
            src={player.img}
            alt="Shoes"
          />
        </figure>
        <div className="">
            <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full object-cover" src={player.img} alt="" />
                <h2 className="card-title">{player.name}</h2>
            </div>
            <div className="flex items-center justify-between">
                <small className="">{player.country}</small>
                <p disabled className="btn text-black">{player.role}</p>
            </div>
          <p>Price: $ {player.price}</p>
          <div>
            <p className="font-semibold text-lg">Ratings:</p>
            <div className="flex items-center justify-between">
                <p>Left-hand-bat:</p>
                <p> {player ["batting-style"]}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p>Price: {player.price}</p>
            <button onClick={()=> handleSelectedPlayer(player)} 
            className="btn btn-primary" 
            disabled={selected}
            >{selected? 'Selected': 'Choose Player'} </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default PlayerCard;
