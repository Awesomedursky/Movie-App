import { Link } from "react-router-dom"

import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';


const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-3 md:gap-y-6'>
      <div className='flex justify-center gap-x-12 items-center'>
        <Link className='footer-icon'>
          <img src={facebook} alt='fb icon' />
        </Link>
        <Link className='footer-icon'>
          <img src={instagram} alt='fb icon' />
        </Link>
        <Link className='footer-icon'>
          <img src={twitter} alt='fb icon' />
        </Link>
        <Link className='footer-icon'>
          <img src={youtube} alt='fb icon' />
        </Link>
      </div>
      <div className='flex justify-center gap-x-6 md:gap-x-12'>
        <Link className='text-[#111827] font-bold text-xs md:text-lg hover:drop-shadow-[0px_0px_10px_#BE123C]'>Conditons of Use</Link>
        <Link className='text-[#111827] font-bold text-xs md:text-lg hover:drop-shadow-[0px_0px_10px_#BE123C]'>Privacy & Policy</Link>
        <Link className='text-[#111827] font-bold text-xs md:text-lg hover:drop-shadow-[0px_0px_10px_#BE123C]'>Press Room</Link>
      </div>

      <p className='font-bold text-[#6B7280] md:text-lg text-center'>&copy; 2023 MovieBox by Ayodele Ayodeji Emmanuel</p>
    </div>
  );
}

export default Footer