import { useState } from 'react';
import Card from './Card';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1d76ffad08a88fe683096a7c6f34a9a0&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);

      console.log(data, 'is this ');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className='form' onSubmit={searchMovies}>
      <label className='label' htmlFor='query'>
        Movie Name
      </label>
      <input
        type='text'
        className='input'
        name='query'
        placeholder='i.e. The Social Dilemma'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button className='button' type='submit'>
        Search
      </button>
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
    </form>
  );
};
export default SearchBar;
