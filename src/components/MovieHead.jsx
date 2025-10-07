export default function MovieHead({name, genre, actors}){
    return(<>
        <h3>{name}</h3>
        <p>{genre}</p>
        <ul>
            {actors.map((actor) => {
                <li>{actor}</li>
            })}
        </ul>
    </>)
}