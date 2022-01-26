import './Card.css';

const Card = (props) => {
  const { movie } = props;
  return (
    <div className='Cardcontainer'>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        />
      </div>
      <div>
        <p>{movie.title}</p>
      </div>
      <div>
        <p>Rating: {movie.vote_average}</p>
        <p>Relase Date: {movie.release_date}</p>
        <p> {movie.overview}</p>
      </div>
    </div>
  );
};
export default Card;
