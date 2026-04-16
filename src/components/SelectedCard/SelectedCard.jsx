import { Delete } from 'lucide-react';
import React from 'react';

const SelectedCard = ({player, selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
    // console.log(player);
    const handleDelete = (player) => {
        // console.log(player); 
        const filtered = selectedPlayers.filter(p => p.id !== player.id);
        setSelectedPlayers(filtered);
        setCoin(coin + player.price);
    }
    return (
        <div className='flex items-center justify-between p-4 border border-gray-300 rounded-md mb-3'>
           <div className='flex items-center gap-4'>
                <img className='h-20 w-20 object-cover rounded-xl' src={player.img} alt="" />
                <div>
                    <h3 className='font-semibold text-lg'>{player.name}</h3>
                    <p>Price: {player.price}</p>
                    <p>{player['batting-style']}</p>
                </div>
           </div>
            <div>
                <button onClick={()=> handleDelete(player)} className='bg-red-400 text-white p-3 rounded-lg'><Delete/></button>
            </div>
        </div>
    );
};

export default SelectedCard;