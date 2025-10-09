export default function MovieDetails({length, releaseDate, musical}){
    function testLength(length) {
        if (length > 120) {
            return "(Over 2 hours)"
        }
    }
    
    return(<>
        <p>{length} minutes <span className = "warnLength">{testLength(length)}</span></p>
        <p>{releaseDate}</p>
        <p>{musical}</p>
    </>)
}