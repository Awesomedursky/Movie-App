import imdb from '../assets/imdb.svg';
import tomato from '../assets/tomato.svg';
import Favorite from '../assets/Favorite.svg';

const MovieCard = ({ img, date, title, vote, genre }) => {
  return (
    <div datatest-id='movie-card' className='relative hover:scale-[1.05] transition-all duration-300 hover:drop-shadow-[0_0_5px_#000] '>
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt={`${img}`} data-testid='movie-poster' className='w-full' loading='lazy' />

      {/* Movie details */}
      <div className='flex flex-col gap-x-3 mt-1 md:mt-3'>
        {/* Movie Release Date */}
        <p className='text-[#9CA3AF] font-bold text-xs' data-testid='movie-release-date'>
          {date}
        </p>

        {/* Movie title */}
        <h4 className='text-lg font-bold leading-5' data-testid='movie-title'>
          {title}
        </h4>

        {/* Movie Rating */}
        <div className='text-black flex gap-8 font-normal justify-between 2xl:text-2xl 2xl:mb-8'>
          <div className='flex items-center justify-center gap-2'>
            <img src={imdb} alt='imdb logo' className='2xl:w-16 2xl:h-8' />
            <p className=''>{vote}/10</p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <img src={tomato} alt='tomato logo' className='2xl:w-16 2xl:h-8' />
            <p>{vote * 10}%</p>
          </div>
        </div>

        {/* Movie Genre */}
        <p className='text-[#9CA3AF] font-bold text-xs' data-testid='movie-release-date'>
          {genre}
        </p>
      </div>

      {/* Series Lable amd Favourite Icon */}

      <div className='absolute  z-20 left-2 top-2 right-2   flex items-center justify-between'>
        <p className='rounded-xl px-2 py-1 bg-[rgba(243,244,246,0.5)] backdrop-blur-[1px] font-bold'>TV SERIES</p>

        <button>
          <img src={Favorite} alt='favourite icon' className=' rounded-full bg-[rgba(243,244,246,0.5)] h-10' />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
