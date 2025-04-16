import Sent from "../assets/icons/icon-send.svg";
import Qrcode from '../assets/icons/Qrcode 1.png';
import Playstore from '../assets/icons/play-store1.png';
import Appstore from '../assets/icons/appstore.png';
import facebook from '../assets/icons/Icon-Facebook.svg';
import twitter from '../assets/icons/twitter.png';
import instagram from '../assets/icons/icon-instagram.svg';
import linkin from '../assets/icons/Icon-Linkedin.svg';


const Footer = () => {
  return (
    <>
    <footer className="bg-black py-8 pt-12 pb-3 border-gray-400 border-b">
        <div className="wrapper w-[90%] mx-auto max-w-[1200px]">
            <div className="flex flex-wrap  justify-between py-6">
                <div className="flex flex-col gap-3">
                    <h1 className='text-white text-3xl font-extrabold '>Exclusive</h1>
                    <h5 className='text-white text-xl font-normal'>Subscribe</h5>
                    <p className="text-white text-base">Get 10% off your first order</p>
                    <form className="flex items-center  bg-black px-2 py-2 rounded-md border-2 border-white ">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            className="bg-black text-white text-sm  focus:outline-none"
                        />
                        <button type="submit">
                            <img src={Sent} alt="Send" className="w-6 h-6 ml-2" />
                        </button>
                    </form>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className='text-white text-2xl font-bold'>Support</h5>
                    <ul className="flex flex-col justify-between gap-3 ">
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>exclusive@gmail.com</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>+88015-88888-9999</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h5 className='text-white text-2xl font-bold'>Account</h5>
                    <ul className="flex flex-col justify-between gap-3">
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>My Account</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>Login / Register</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>Cart</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>Wishlist</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>Shop</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className='text-white text-2xl font-bold'>Quick Link</h5>
                    <ul className="flex flex-col justify-between gap-3">
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>Privacy Policy</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>Terms Of Use</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>FAQ</li>
                        <li className='text-white text-1xl font-normal hover:underline hover:decoration-white'>Contact</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className='text-white text-2xl font-bold'>Download App</h5>
                    <h6 className='text-[#F5F5F5] text-xs font-normal'>Save $3 with App New User Only</h6>
                    <div className="flex gap-3">
                        <img src={Qrcode} alt="qrcode" />
                        <span className="flex flex-col justify-between">
                            <img src={Playstore} alt="playstore" />
                            <img src={Appstore} alt="appstore" />
                        </span>
                    </div>
                    <div className="flex items-center justify-between ">
                        <a href="#"><img src={facebook} alt="icon" /></a>
                        <a href="#"><img src={twitter} alt="icon" /></a>
                        <a href="#"><img src={instagram} alt="icon" /></a>
                        <a href="#"><img src={linkin} alt="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
            <div className="p-3 border-t border-gray-800">
                <h6 className="text-center">&copy;Copyright Rimel 2022. All right reserved</h6>
            </div>
    </footer>
    </>
  )
}
 
export default Footer

