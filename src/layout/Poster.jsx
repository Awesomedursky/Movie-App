import { Link } from "react-router-dom"
import Logo from '../assets/Logo.svg';
import Menu from '../assets/Menu.svg';
import imdb from '../assets/imdb.svg';
import tomato from '../assets/tomato.svg';
import Play from '../assets/Play.svg';
import SearchBox from '../components/SearchBox';

const Poster = () => {
  return (
    // Homepage Poster
    <div className='bg-hero-pattern bg-center bg-cover md:h-[90vh] 2xl:px-14 p-4 md:mb-2 relative'>
      {/* page header */}
      <header className='flex  justify-between flex-wrap items-center mb-[4rem] md:mb-[5.81rem] gap-4'>
        {/* logo */}
        <Link to='/' className='md:text-2xl font-bold flex gap-1 md:gap-4 items-center justify-center text-white'>
          <img src={Logo} alt='logo' className='h-10 md:h-auto' />
          <span className="hidden md:flex">MovieBox</span>
        </Link>

        {/* Search Box */}
        <SearchBox />

        {/* Menu */}
        <div className='flex items-center gap-5'>
          <Link className='hidden md:flex md:text-base font-bold text-white'>Sign in</Link>
          <button>
            <img src={Menu} alt='menu-icon' className=' w-10 md:w-auto' />
          </button>
        </div>
      </header>

      {/* Poster Details */}
      <div className=' md:w-[25rem] 2xl:w-[35rem]'>
        {/*  movie title */}
        <h1 className='text-2xl md:text-5xl 2xl:text-8xl text-white font-bold leading-6 md:leading-[3.5rem] text-center md:text-left mb-4 2xl:mb-8'>John Wick 3: Parabellum</h1>

        {/* Movie rating*/}
        <div className='text-white flex gap-8 font-normal mb-4 justify-center md:justify-normal 2xl:text-2xl 2xl:mb-8'>
          <div className='flex items-center gap-3'>
            <img src={imdb} alt='imdb logo' className='2xl:w-16 2xl:h-8' />
            <p className=''>86.0/100</p>
          </div>
          <div className='flex items-center gap-3'>
            <img src={tomato} alt='tomato logo' className='2xl:w-16 2xl:h-8' />
            <p>97%</p>
          </div>
        </div>

        {/* Movie Summary */}
        <div className='md:w-[18.875rem] 2xl:w-[30rem] text-justify'>
          <p className='text-white 2xl:text-2xl mb-4'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

          {/* watch trailer button */}
          <div className='flex justify-center md:justify-normal'>
            <button className='text-white bg-[#BE123C] px-4 py-2 rounded-md text-sm 2xl:text-xl font-bold flex transition-all 300 gap-x-2 items-center'>
              {' '}
              <img src={Play} alt='play icon' className='2xl:h-8' />
              <span>WATCH TRAILER</span>
            </button>
          </div>
        </div>
      </div>

      {/* Side Indicator */}
      <div className='hidden md:flex absolute  flex-col gap-x-2 right-6 items-center top-[50%] translate-y-[-50%]'>
        <p className='text-[#9CA3AF] font-bold text-xs'>1</p>
        <p className='text-[#9CA3AF] font-bold text-xs'>2</p>
        <p className='text-white font-bold text-base relative before:absolute before:bg-white before:h-1 before:w-5 before:rounded-lg before:right-3 before:top-[50%] before:translate-y-[-50%] '>3</p>
        <p className='text-[#9CA3AF] font-bold text-xs'>4</p>
        <p className='text-[#9CA3AF] font-bold text-xs'>5</p>
      </div>
    </div>
  );
};

export default Poster