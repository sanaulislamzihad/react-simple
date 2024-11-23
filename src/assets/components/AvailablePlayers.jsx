/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


const AvailablePlayers = ({chosePlayer}) => {

    // Available Players 
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    

    return (
        <div>
            {/* Section Title  */}
            <div>
                <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-left mt-5 md:mt-0">Available Players </h2>
            </div>

            {/* All Players Container  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-48 lg:mb-72">
                {
                    players.map(player => (
                        <div key={player.id} className="card card-compact bg-base-100  shadow-xl p-3 md:p-6 border">
                            <figure>
                                <img
                                className="h-[200px] md:h-[250px] w-full rounded-b-2xl"
                                src={player.image}
                                alt="Player Image" />
                            </figure>
                            <div className="mt-4 ">
                                <h2 className="card-title font-semibold text-xl md:text-xl"><i className="fa-solid fa-user mr-2"></i> {player.name}</h2>
                                <div className="flex justify-between items-center">
                                    <p className="mt-4"><i className="fa-solid fa-flag mr-2 text-gray-500"></i> {player.country}</p>
                                    <p className="mt-4 bg-gray-100 py-1 px-5 rounded-lg mb-3">{player.player_type}</p>
                                </div>
                                <hr className="mb-3" />
                                <h3 className="font-bold  ">Rating</h3>
                                <div className="flex justify-between items-center">
                                    <p className="mt-0 lg:mt-2  lg:font-semibold">{player.batting_hand}</p>
                                    <p className="mt-0 lg:mt-2 p-3">{player.bowling_type}</p>
                                </div>
                                
                                <div className="flex justify-between items-center pb-4 md:pb-0">
                                    <h3 className="text-sm md:text-md font-semibold text-gray-700 mt-4">Price: $ {player.price}  </h3>
                                    <button onClick={()=> chosePlayer(player)} className=" rounded-md px-3 md:px-5 py-2 outline outline-yellow-400 outline-1 outline-offset-4 hover:bg-yellow-400 "> Chose Player </button>
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default AvailablePlayers;