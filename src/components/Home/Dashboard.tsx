
import eth from "../../assets/ethereum.png";
import bitcoin from "../../assets/BTC.png";

const Dashboard: React.FC = () => {
 
    return (
        <>
            <div>
                <a className="transform hover:scale-105 transition duration-300 shadow-xl  rounded-lg  " href="#">
                    <div className="p-5 text-primary-500 rounded bg-none ">
                        <div className="mt-3  text-base font-bold text-center leading-8">Your Wallet Balance</div>
                        <div className="flex justify-center">
                            <div className="mt-3 text-3xl leading-8 text-white">$ 6,200.34</div>
                        </div>
                    </div>
                </a>

            </div>
            <div className="flex flex-row">

                <div className=" w-full bg-primary h-full flex flex-row flex-wrap gap-6  justify-center p-10 overflow-hidden text-white">

                    <a className="transform hover:scale-105 transition duration-300 border-2 border-primary-500 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y" href="#">
                        <div className="p-5 text-white rounded bg-none ">
                            <div className="flex justify-between gap-x-4">
                                <img src={bitcoin} alt={bitcoin} className="h-9 w-9 flex-none rounded-full bg-primary" />
                                <div className="mt-3 text-1xl leading-8 text-white">BTC</div>
                                <div className="mt-3  text-base font-bold leading-8">$ 6,200.34</div>
                            </div>
                          
                        </div>
                    </a>

                    <a className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 border-2 border-primary-500 intro-y" href="#">
                        <div className="p-5 text-white rounded bg-none ">
                            <div className="flex justify-between gap-x-4">
                                <img src={eth} alt={eth} className="h-9 w-12 flex-none rounded-full bg-primary" />
                                <div className="mt-3 text-1xl leading-8 text-white">ETH</div>
                                <div className="mt-3 text-base font-bold leading-8">$ 2,123.02</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
