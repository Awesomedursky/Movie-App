import Logo from '../assets/Logo.svg';
import Home from '../assets/Home.svg';
import Projector from '../assets/Projector.svg'
import TV from '../assets/TV.svg'
import Calender from '../assets/Logout.svg'
import Logout from '../assets/Logout.svg'



import { Link, NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { BallTriangle } from 'react-loader-spinner';
import { options } from '../services/options';

import useFetch from 'use-http';
import MovieDetailsCard from '../components/MovieDetailsCard';

const MovieDetails = () => {
  const { movieId } = useParams();

  // Fetching the movie
  const { loading, error, data } = useFetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&`, options, []);
  console.log(data);

  // is loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //checking if movies i loading
    if (loading) {
      setIsLoading(true);
    }

    if (!loading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div className='flex flex-row'>
      {/* Sidebar */}
      <div className=' hidden sm:flex  py-2 md:py-5  border-r-[rgba(0,0,0,0.55)] border-r-[1px] h-screen rounded-r-[2rem] border-[rgba(0,0,0,0.30)] flex-col  justify-between'>
        <Link to='/' className='px-5 md:text-2xl font-bold flex gap-x-2 items-center text-black'>
          <img src={Logo} alt='logo' className='h-5 md:h-auto' />
          MovieBox
        </Link>

        {/* Nav Links */}
        <div>
          <NavLink className='link' to='/'>
            <img src={Home} alt='home-icon' /> Home
          </NavLink>
          <NavLink className='link' to='/movies'>
            <img src={Projector} alt='video-icon' /> Movies
          </NavLink>
          <NavLink className='link' to='/series'>
            <img src={TV} alt='tv-show-icon' /> TV Series
          </NavLink>
          <NavLink className='link' to='/'>
            <img src={Calender} alt='calender-icon' /> Upcoming
          </NavLink>
        </div>

        {/* Quiz Notes */}
        <div className='w-[10rem] max-w-[10rem] p-4 md:px-4 md:py-4 mx-5 border-[1px] rounded-3xl border-[#BE123C] flex flex-col justify-center'>
          <h3 className='text-[rgba(51,51,51,0.80)] font-semibold text-base mb-2'>Play movie quizes and earn free tickets</h3>
          <p className='text-[#666] font-medium mb-2'>50k people are playing now</p>
          <button className='mx-auto text-[#BE123C] font-medium text-xs px-[1.04rem] py-[0.38rem] bg-[rgba(190,18,60,0.20)] rounded-[1.875rem] hover:text-white hover:bg-[#BE123C]'>Start Playing</button>
        </div>

        {/* Logout */}
        <div className='flex mx-5 mt-2'>
          <img src={Logout} alt='logout-icon' />
          <p className=' text-xl font-semibold text-[#666]'>Log out</p>
        </div>
      </div>

      {/* Main Movie Details */}
      <div className='flex flex-col gap-5 m-5 flex-1 '>
        {/* checking if there's a loading state */}
        {isLoading && (
          <div className='flex justify-center items-center w-full h-full'>
            <BallTriangle height={100} width={100} radius={5} color='#4fa94d' ariaLabel='ball-triangle-loading' />
          </div>
        )}
        {data && (
          <MovieDetailsCard
            poster={data?.poster_path}
            title={data?.title}
            time={data?.release_date}
            genre={data?.genres?.map((i) => (
              <p className='text-[#BE123C] font-semibold text-xs px-[1.04rem] py-[0.38rem] bg-[rgba(190,18,60,0.20)] rounded-[1.875rem]'>{i.name}</p>
            ))}
            runtime={data.runtime}
            preview={data.overview}
          />
        )}

        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default MovieDetails;
