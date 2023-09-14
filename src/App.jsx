import { Routes, Route } from 'react-router';

import Homepage from './Pages/Homepage';
import MovieDetails from './Pages/MovieDetails';
import { FeaturedMovie } from './layout';

const App = () => {
  return (
    <div className=''>
      {/* List of Routes */}
      <Routes>
        <Route exact path='/' element={<Homepage />}>
          <Route exact path='all' element={<FeaturedMovie/>}/>
        </Route>
        <Route exact path='/movies/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;

