export default function MovieHead({name, genre, actors}){
    const example = actors.map((actor) => {
        return (
            <li>{actor}</li>
        )
    }) 
    return(<>
        <h3>{name}</h3>
        <p>{genre}</p>
        <ul>
            {example}
        </ul>
    </>)
}