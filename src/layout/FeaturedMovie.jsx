import Chevron from '../assets/Chevron.svg'
import { Link } from 'react-router-dom';
import useFetch from 'use-http';
import { BallTriangle } from 'react-loader-spinner';
import { options,genreNames } from '../services/options';

import { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';

const FeaturedMovie = () => {
  
  // is loading state
  const [isLoading, setIsLoading] = useState(false);

  // fetching from the movie api
  const { loading, error, data} = useFetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&', options, []);

  useEffect(() => {
    //
    if (loading) {
      setIsLoading(true);
    }

    if (!loading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <div className='md:px-8 2xl:px-14 p-4 mb-10 md:mb-20'>
      {/* Layout title and Link */}
      <div className='flex justify-between items-center mb-3'>
        <p className=' text-2xl md:text-4xl 2xl:text-5xl font-bold'>Featured Movie</p>

        <Link className='text-[#BE123C] flex hover:drop-shadow-[0px_0px_5px_black] active:scale-[1.1]' to='/all'>
          See more <img src={Chevron} alt='right icon logo' />
        </Link>
      </div>

      {/* Movie List */}
      <div className=''>
        {/* checking if there's a loading state */}
        {isLoading && (
          <div className='flex justify-center items-center'>
            <BallTriangle height={100} width={100} radius={5} color='#4fa94d' ariaLabel='ball-triangle-loading' />
          </div>
        )}

        {/* mapping through the movie resutls */}
        <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-y-10 md:gap-x-20'>
          {data?.results?.slice(0, 10).map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie?.id}>
              <MovieCard img={movie?.poster_path} date={movie?.release_date} title={movie?.title} vote={movie?.vote_average} genre={movie?.genre_ids?.map((id) => `${genreNames[id]}  `)} />
            </Link>
          ))}
        </div>

        {/* Checking if there's an error */}
        {error && (
          <div>
            <p className='text-lg font-bold text-center'>{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedMovie;
