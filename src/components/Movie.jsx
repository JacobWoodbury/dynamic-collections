import MovieHead from "./MovieHead"
import MovieDetails from "./MovieDetails"

export default function Movie(props){

    return(<>
        <MovieHead
            name= {props.name}
            genre= {props.genre}
            actors = {props.actors}
        />
        <MovieDetails
            length = {props.length}
            releaseDate = {props.releaseDate}
            musical = {props.musical}
        />
    
    </>)
}