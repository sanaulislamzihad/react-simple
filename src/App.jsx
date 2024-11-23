// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Banner from './assets/components/Banner'
import Header from './assets/components/Header'
import { useState } from 'react';
import ToggleContainer from './assets/components/ToggleContainer';
import Footer from './assets/components/Footer';

function App() {

  // Coin Added 
  const [coins, setCoins] = useState(0)
  const addCoin = () => {
    setCoins(coins + 700000)
  }

  // Toogle Button
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available"
  })

  const handleIsActive = (status) => {
    if(status == "available"){
      setIsActive({
        available: true,
        status: "available"
      })
    }
    else{
      setIsActive({
        available: false,
        status: "selected"
      })
    }

  }

 

  // Add / Select Player in Selected Page
  const [selectPlayer, setSelectPlayer] = useState([])

  const chosePlayer = player=> {

    // check if Player have available coin or not 
    if(coins < player.price){
      toast.warning("Don't have sufficient coin");
      return;
    }

    // Maximum Player Checking
    if(selectPlayer.length >= 6){
      toast.warning("Player limit is exceeded");
      return;
    }

    const isExist = selectPlayer.find(previousPlayer => previousPlayer.id == player.id)
    
    if(!isExist){
      const newPlayer = [...selectPlayer, player]
      setSelectPlayer(newPlayer)
      setCoins(coins - player.price)
      toast.success(`Congrates !! '${player.name}' is now in your Squad`);
    }
    else{
      toast.warning(`' ${player.name} ' already selected in your squad`)
    }
  }

  // Remove Player From Selected List
  const [removePlayer, setRemovePlayer] = useState([])

  const handleRemovePlayer = id => {
    const deletePlayer = selectPlayer.find(player=> player.id === id)

    // Update Players in Selected Player list 
    const updatePlayer = selectPlayer.filter(player=> player.id !== id)
    setSelectPlayer(updatePlayer)

    setRemovePlayer([...removePlayer, deletePlayer])
    toast.success("Successfully Deleted Player");
  }

  
  
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

  return (
    <>
      <div>
        
        <div>
          {/* Header Component  */}
          <Header coins={coins} ></Header>

          {/* Banner Component  */}
          <Banner addCoin={addCoin}></Banner>

          {/* React-toastify  */}
          <ToastContainer position="top-center" toastStyle={{ backgroundColor: "white" }} />

          {/* Toggle Container  */}
          <ToggleContainer 
            handleIsActive={handleIsActive} 
            isActive={isActive} 
            chosePlayer={chosePlayer} 
            selectPlayer={selectPlayer} 
            handleRemovePlayer={handleRemovePlayer} 
            ></ToggleContainer>

          {/* Footer Section  */}
          <Footer></Footer>

        </div>
      </div>
    </>
  )
}

export default App
