const MovieDetailsCard = ({ poster, title, time, genre, runtime, preview }) => {
  const timeUTC = (time) => {
    const date = new Date(time);
    return date.toUTCString();
  };

  return (
    <div className='flex flex-col md:items-start flex-1 gap-y-5'>
      <img src={`https://image.tmdb.org/t/p/original${poster}`} alt={`${poster}`} className='h-[60vh] md:h-[25rem] md:w-[20rem] rounded-2xl' />
      <div className='max-w-[40rem] flex flex-col items-start'>
        <h3 data-testid='movie-title' className=' text-[#666] text-2xl font-bold'>
          {title}
        </h3>
        <p data-testid='movie-release-date' className=' text-[#666] text-lg font-bold'>
          {timeUTC(`${time}`)}
        </p>
        <p data-testid='movie-genre' className="flex gap-x-2">
          {genre}
        </p>

        <div data-testid='movie-runtime' className=' text-[#666] text-lg font-bold'>
          {`${runtime} mins`}
        </div>
        <p data-testid='movie-overview' className=' text-[#666] text-medium font-bold text-justify'>
          {preview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
