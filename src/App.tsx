import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { routes } from './routes';

const MostPopularPage = React.lazy(() => import('./pages/MostPopularPage'))
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage'))

function App() {
  return (
    <div className="App">
      <Suspense>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={`${routes.mostPopular}`} element={<MostPopularPage />} />
              <Route path={`${routes.mostPopular}/:year`} element={<MostPopularPage />} />
              <Route path={`${routes.movieDetails}/:movieID`} element={<MovieDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
