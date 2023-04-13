import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Categories } from './components/Categories/Categories';
import { MainContent } from './components/MainContent';
import { MoviePage } from './components/MoviePage';
import { MoviesResults } from './components/MoviesResults';

function App() {
  return (
    <div class="m-auto container flex-col justify-center align-middle">
      <div class="flex justify-center align-middle">
        <SearchBar class='w-2/3'/>
      </div>
    
    <Categories class="w-1/4"/>
    <MainContent />
    <MoviePage />
    <MoviesResults />
    </div>
    );
}

export default App;
