/* eslint-disable react/prop-types */

import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";


const ToggleContainer = ({
    handleIsActive, 
    isActive, 
    chosePlayer, 
    selectPlayer, 
    handleRemovePlayer,
    }) => {
    return (
        <div className="container mx-auto w-11/12">
            <div>
                <div className="w-72 flex justify-self-end mt-10 border-2 rounded-3xl">
                    <button  onClick={()=> handleIsActive("available")} className={`${isActive.available ? "btn w-1/2 py-5  rounded-l-3xl rounded-r-none border-none bg-gray-300 active":"btn w-1/2 py-5  rounded-l-3xl rounded-r-none border-none bg-gray-300"}`}>Available</button>
                    
                    <button  onClick={()=> handleIsActive("selected")} className={`${isActive.available ? "btn w-1/2 py-5  rounded-r-3xl rounded-l-none border-none bg-gray-300":"btn w-1/2 py-5  rounded-r-3xl rounded-l-none border-none bg-gray-300 active"}`}>Selected ({selectPlayer.length})</button>
                </div>
                {isActive.available ? <AvailablePlayers chosePlayer={chosePlayer}></AvailablePlayers> : <SelectedPlayers 
                    selectPlayer={selectPlayer} 
                    handleRemovePlayer={handleRemovePlayer} 
                    handleIsActive={handleIsActive}
                    isActive={isActive} ></SelectedPlayers> }
            </div>
        </div>
    );
};

export default ToggleContainer;