export default function MovieDetails({length, releaseDate, musical}){
    function testLength(length) {
        if (length) {
            if (length > 120) {
                const spanTag = <span className = "warnLength">(Over 2 hours!)</span>
                return <>
                    {length} minutes {spanTag}
                </>
            }
            else {
                return <>
                    {length} minutes
                </>
            }
        }
        else {
            return <>
                No time given!
            </>
        }
       
    }
    
    return(<>
        <p>{testLength(length)}</p>
        <p>{releaseDate}</p>
        <p>{musical}</p>
    </>)
}