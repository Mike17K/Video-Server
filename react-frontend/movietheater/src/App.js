import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Categories } from './components/Categories';
import { MainContent } from './components/MainContent';
import { MoviePage } from './components/MoviePage';
import { MoviesResults } from './components/MoviesResults';

function App() {
  return (
    <>
    <SearchBar />
    <Categories />
    <MainContent />
    <MoviePage />
    <MoviesResults />
    </>
    );
}

export default App;
