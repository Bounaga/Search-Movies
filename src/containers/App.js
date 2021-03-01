import { useEffect, useState } from 'react';
import './App.css';
import Form from '../components/Form';
import MoviesList from '../components/MoviesList';
import Scrool from '../components/scrool';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('stranger');
  // duplicate two to solve the problem of the first clicked movie not showen up
  const [favoriteMovies, setFavoritemovies] = useState([]);
  const [favorite, setFavorite] = useState([]);


  // Api
  useEffect(() => {
    const getMovies = async () => {
        const API_key = `https://www.omdbapi.com/?s=${searchValue}&apikey=5c93365f`;
        const response = await fetch(API_key);
        const data = await response.json();
        // this if statement is really magical , use it when you wanna search
        if (data.Search) {
          setMovies(data.Search);
        }
        // console.log(data);
    }
    getMovies();
  },[searchValue]);
  
  
  
  //save favorites to local storage 
  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavorite(movieFavourites);
      setFavoritemovies(movieFavourites);
		}
	}, []);


  //Add favorite
  const handleAddTofavorite = (clickedMovie) => {
      // if statement to check if the movie is already in favorite list
      if (favoriteMovies.includes(clickedMovie))
      {
        alert("This movie is already in your favorites " );
      }
      else
      {
        const newFavouritList = [...favorite, clickedMovie];
        setFavorite(newFavouritList);
        setFavoritemovies(newFavouritList);
        saveToLocalStorage(newFavouritList);
      }
  }


// remove from favorite
  const handleRemove = (clickedMovie) => {

    const FiltredAfterRemove = favoriteMovies.filter(movie => movie.imdbID !== clickedMovie.imdbID)
    setFavorite(FiltredAfterRemove);
    setFavoritemovies(FiltredAfterRemove);

    saveToLocalStorage(FiltredAfterRemove);
  }

 

  return (
    <div className="App">

        <Form setSearchValue={setSearchValue}/>

        <Scrool>
          <div className='wrap-movies'>
              <MoviesList  
                movies = {movies} 
                setFavoritemovies={setFavoritemovies} 
                icon='fa fa-heart' 
                expression='Add to watch list'
                handleClick ={handleAddTofavorite} 
              />
          </div>
        </Scrool>


        <h1 className='myfavorites-Title'>My Watch List</h1>
        <Scrool>
          <div className='wrap-movies'>
            <MoviesList  
                movies = {favoriteMovies} 
                setFavoritemovies={setFavoritemovies} 
                icon='fa fa-remove' 
                expression='Remove'
                handleClick ={handleRemove} 
                />
          </div>
        </Scrool>
    </div>
  );
}

export default App;
