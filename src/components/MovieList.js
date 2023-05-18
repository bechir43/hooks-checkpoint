import "./movielist.css";
import MovieCard from "../components/MovieCard";

function MovieList({list}){
    return(
        <div className="MovieList">{
        list.map( (ele)=>(
            <MovieCard  ele={ele} />
        ))
        }
        </div>
    );
}

export default MovieList;