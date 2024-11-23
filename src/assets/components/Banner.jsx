/* eslint-disable react/prop-types */
import { toast } from "react-toastify";


const Banner = ({addCoin}) => {

    const handleAddCoin = ()=> {
        addCoin()
        toast.success("Credit Added Your Account")
    }

    return (
        <div>
            <div className="container w-11/12  mx-auto">
                <div
                    className="hero h-[400px] lg:h-[600px]  rounded-3xl bg-gray-950 mt-1"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/JvLrVHw/bg-shadow.png)",
                    }}>
                    
                    <div className="hero-content text-neutral-content text-center">
                        <div className="justify-center space-y-4">
                        
                            <div className="flex justify-center ">
                                <img src="https://i.ibb.co.com/dMfTL8y/banner-main.png" alt="" className="w-40 lg:w-auto" />
                            </div>
                            <h1 className=" text-xl md:text-2xl  lg:text-4xl font-bold">Assamble Your Ultimate Dream 11 Cricket Team</h1>
                            <p className=" mb-6 ">Beyond Boundaries Beyond Limits</p>
                            
                            <button onClick={handleAddCoin} className="btn  outline outline-yellow-400 outline-2 outline-offset-4 bg-yellow-400">Claim Free Credit</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;