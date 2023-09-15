const SmallMovieCard = ({ img, year, title, genre }) => {
  return (
    <div className='flex gap-2 rounded-2xl overflow-clip bg-white p-1 md:h-[15rem]'>
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt={img} className='rounded-xl  w-[50%]' />
      <div className='flex flex-col items-start gap-y-5'>
        <h1 className='text-medium md:text-xl font-bold'>{title}</h1>
        <p className='md:text-xl font-semibold'>{year}</p>
        <div className='flex gap-1 flex-wrap'>{genre}</div>
      </div>
    </div>
  );
};

export default SmallMovieCard;
