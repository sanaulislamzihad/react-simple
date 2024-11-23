/* eslint-disable react/no-unknown-property */


const Footer = () => {
    return (
        <div>
            <div className="footerbg pt-40 ">
                <div className="container  mx-auto pb-10">
                    {/* Newsletter section  */}

                    <div className="-mt-72 border bg-gradient-to-r from-blue-200 via-white to-yellow-200  mx-6 rounded-xl py-7 md:py-10 lg:py-14  outline outline-white outline-1 outline-offset-8">
                        <div className="flex flex-col items-center space-y-4 px-5">
                            <h2 className="text-gray-900 text-lg text-center lg:text-2xl font-bold">Subscribe to our Newsletter</h2>
                            <p>Get the latest updates and news Right in your inbox !</p>
                            <div className="join">
                                <input className=" focus:outline-none input input-bordered rounded-l-xl join-item w-36  md:w-96" placeholder="Enter Your Email" />
                                <button className="btn join-item rounded-r-xl bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-300 ...">Subscribe</button>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div className="flex justify-center mt-10">
                            <img src="https://i.ibb.co.com/4FGSv8V/logo-footer.png" alt="" />
                        </div>
                        <footer className="footer  text-neutral-content p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
                            <nav className="w-2/3">
                                <h6 className="text-white font-semibold text-lg mb-4">About Us</h6>
                                <p className="text-gray-400">We are a passionate team dedicated to providing the best service to our customers.</p>
                            </nav>
                            <nav>
                                <h6 className="text-white font-semibold text-lg mb-4">Quick Link</h6>
                                <a className="link link-hover text-gray-400"> <i class="fa-solid fa-circle mr-2 text-xs"></i> About us</a>
                                <a className="link link-hover text-gray-400"> <i class="fa-solid fa-circle mr-2 text-xs"></i> Contact</a>
                                <a className="link link-hover text-gray-400"> <i class="fa-solid fa-circle mr-2 text-xs"></i> Jobs</a>
                                <a className="link link-hover text-gray-400"> <i class="fa-solid fa-circle mr-2 text-xs"></i> Press kit</a>
                            </nav>
                            <nav>
                                <h6 className="text-white font-semibold text-lg mb-4">Subscribe</h6>
                                <p className="text-gray-400 mb-3">Subscribe to out newsletter for the latest news updates</p>
                                <div className="join">
                                    <input className="input input-bordered rounded-l-xl join-item text-gray-950 w-36 md:w-auto" placeholder="Enter Your Email" />
                                    <button className="btn join-item rounded-r-xl bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-300 ...">Subscribe</button>
                                </div>
                            </nav>
                        </footer>
                    </div>
                </div>


                <hr className=" border-gray-700" />

                <div className="container mx-auto py-7">
                    <p className="text-center text-xs text-gray-400">2024 All Rights reserved by Rehan</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;