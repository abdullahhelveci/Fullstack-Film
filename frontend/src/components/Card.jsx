import {Link} from 'react-router-dom'

const Card = ({ movie }) => {
  const r = +movie.rating;

  const color =
    r > 9
      ? "#0073ff"
      : r > 7.5
      ? "#04de04"
      : r > 5
      ? "orange"
      : r > 3
      ? "#d6c918"
      : "red";

  return (
    <Link to={`/movie/${movie.id}`} className="border shadow p-3 rounded-md hover:shadow-lg cursor-pointer flex flex-col max-sm:flex-row max-sm:gap-5">
      <div className="relative">
        <img
          className="rounded w-full object-cover max-h-[250px] max-sm:max-h-[150px]"
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          alt=""
        />
        <span
          style={{ background: color }}
          className="absolute top-[-10px] right-[-10px] text-white rounded-full p-2 "
        >
          {Number(movie.rating).toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col justify-between h-full">
        <h3 className="font-bold text-xl md:mt-4 line-clamp-2">{movie.title}</h3>
        <div>
        <p>{movie.year}</p>
        <p className="flex gap-2 my-2">
          {movie.genre.map((genre, i) => (
            <span className="bg-gray-200 rounded-md px-2 py-1" key={i}>{genre}</span>
          ))}
        </p>
        <p className="bg-red-200 rounded-md px-2 py-1 w-fit">{movie.language}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
