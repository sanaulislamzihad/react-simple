/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import AvailablePlayers from "./AvailablePlayers";


const SelectedPlayers = ({selectPlayer, handleRemovePlayer, handleIsActive, isActive }) => {
    
    return (
        <div className="container mx-auto px-3">
            <div className="pb-56  ">
                <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-left mt-5 md:mt-0 mb-10">Selected Players ({selectPlayer.length}/6) </h2>

                {
                    selectPlayer.map((palyer,index)=>(
                        <div key={index} className="flex justify-between p-3 bg-gray-100 rounded-lg outline outline-gray-300 outline-1 outline-offset-8 mb-10">
                            <div className="flex items-center gap-4 ">
                                <div className="w-16 h-16 bg-gray-400 rounded-lg">
                                    <img src={palyer.image} alt="" className="w-full h-full rounded-lg"/>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="font-semibold text-gray-600">{palyer.name} </h2>
                                    <p className="text-xs text-gray-600">{palyer.batting_hand} </p>
                                    <p className="text-xs text-gray-600 font-semibold"> $ {palyer.price} </p>
                                </div>
                            </div>
                            <button onClick={()=> handleRemovePlayer(palyer.id)}><i class="fa-solid fa-trash-can text-xl text-red-600 mr-6"> </i></button>
                        </div>

                    ))
                }
                
                <button onClick={()=> handleIsActive("available")} className="btn mt-5 outline outline-yellow-400 outline-2 outline-offset-4 bg-yellow-400">Add More Players</button>
                
                {isActive.available ? <AvailablePlayers ></AvailablePlayers> : ""}
                
            </div>
        </div>
    );
};

export default SelectedPlayers;