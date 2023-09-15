import { useEffect, useState } from 'react';
import Search from '../assets/Search.svg';
import { options, genreNames } from '../services/options';

import useFetch from 'use-http';
import { BallTriangle } from 'react-loader-spinner';
import MovieCard from './MovieCard';
import SmallMovieCard from './SmallMovieCard';
import { Link } from 'react-router-dom';

const SearchBox = () => {
  const [input, setInput] = useState('');
  const { loading, error, data } = useFetch(`https://api.themoviedb.org/3/search/movie?query=${input}`, options, [input]);

  console.log(data);

  return (
    <>
      <div className=' relative w-[50rem] md:w-fit order-last md:order-none flex justify-center items-center z-20'>
        <div className='relative md:w-96 2xl:w-[35rem]  h-9 flex justify-between items-center transition-all duration-300 mt-4 md:mt-0 w-full'>
          {/* Input box */}
          <input type='text' placeholder='What do you want to watch?' className=' bg-transparent border rounded-md py-[0.375rem] px-[0.625rem] w-full outline-none text-white focus:border-[2px]  transition- duration-300 2xl:text-xl 2xl:p-3' value={input} onChange={(e) => setInput(e.target.value)} />
          {/* Icon */}
          <img src={Search} alt='search-icon' className='w-4 h-4 absolute right-2 2xl:w-6 2xl:h-6' />
        </div>

        {input && (
          <div className='absolute h-[80vh] flex flex-col w-full bg-white/30 backdrop-blur-3xl  rounded-xl p-4 top-14 scrollbar-thin overflow-y-auto z-30 gap-3 drop-shadow-[0_0_10px_black]'>
            {loading && (
              <div className='flex items-center justify-center h-full gap-5'>
                <BallTriangle height={100} width={100} radius={5} color='#4fa94d' ariaLabel='ball-triangle-loading' />
              </div>
            )}

            {data?.results?.map((i) => (
              <Link to={`/movies/${i.id}`} key={i.id} className=''>
                <SmallMovieCard
                  img={i?.poster_path}
                  year={i?.release_date}
                  title={i.title}
                  genre={i?.genre_ids?.map((id) => (
                    <p className='text-[#BE123C] font-semibold text-xs px-2 py-1 bg-[rgba(190,18,60,0.20)] rounded-[1.875rem]'>{`${genreNames[id]} `}</p>
                  ))}
                />
              </Link>
            ))}

            {error && <p>{error.name}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
