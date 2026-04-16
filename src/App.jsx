import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
const playersFetch = async () => {
  const res = await fetch('players.json')
  return res.json()
}
const playersPromise= playersFetch();

function App() {
  const [coin, setCoin] = useState(5000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [toggle, setToggle] = useState(true);
  const handleCoin = () => {
    setCoin(coin + 2500000);
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Navbar coin={coin} setCoin={setCoin}></Navbar>
      <Banner handleCoin={handleCoin}></Banner>
      <div className='flex items-center justify-between mt-10 mb-5'>
        <h3 className='text-2xl font-semibold'>{toggle ? 'Available Players' : `Selected Players(${selectedPlayers.length}/6)`}</h3>
        <div className='flex'>
        <button className={`btn border-r-0 ${toggle && 'bg-[#E7FE29]'} rounded-r-none`} onClick={() => setToggle(true)}>Available</button>
          <button className={`btn border-l-0 ${!toggle && 'bg-[#E7FE29]'} rounded-l-none`} onClick={() => setToggle(false)}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>
      {
        toggle? <Suspense fallback={<div>Loading...</div>}>
        <AvailablePlayers  
        coin={coin}
        setCoin={setCoin}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers 
      selectedPlayers={selectedPlayers}
      setSelectedPlayers={setSelectedPlayers}
      setCoin={setCoin}
      coin={coin}></SelectedPlayers> 
      }
      
      
    </div>
  )
}

export default App
