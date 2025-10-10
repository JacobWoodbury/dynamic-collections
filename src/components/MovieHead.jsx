export default function MovieHead({name, genre, actors}){
    function featuredGenre() {
        if (genre === "Science Fiction") {
            return (
                <span className = "featured">(Educational!)</span>
            )
        }
        else if (genre === "Crime") {
            return (
                <span className = "featured">(Eerie!)</span>
            )
        }
        else if (genre == "Comedy") {
            return (
                <span className = "featured">(Funny!)</span>
            )
        }
        else {
            return (
                <span className = "featured">(Amazing!)</span>
            )
        }
    }

    const example = actors.map((actor) => {
        return (
            <li>{actor}</li>
        )
    })

    return(<>
        <h3>{name}</h3>
        <p>{genre} {featuredGenre()}</p>
        <ul class = "centeredBullets">
            {example}
        </ul>
    </>)
}