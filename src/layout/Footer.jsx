import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-3 md:gap-y-6'>
      <div className='flex justify-center gap-x-12 items-center'>
        <Link className='footer-icon'>
          <img src='/src/assets/facebook.svg' alt='fb icon' />
        </Link>
        <Link className='footer-icon'>
          <img src='/src/assets/instagram.svg' alt='fb icon' />
        </Link>
        <Link className='footer-icon'>
          <img src='/src/assets/twitter.svg' alt='fb icon' />
        </Link>
        <Link className='footer-icon'>
          <img src='/src/assets/youtube.svg' alt='fb icon' />
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