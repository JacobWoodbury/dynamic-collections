export default function MovieDetails({length, releaseDate, musical}){
    return(<>
        <p>{length}</p>
        <p>{releaseDate}</p>
        <p>{musical}</p>
    </>)
}