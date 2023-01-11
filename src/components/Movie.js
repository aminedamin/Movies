import { useParams } from "react-router-dom"

const Movie =({movies})=>{

    const {movie} = useParams()
    const found = movies.find(el=> el.id == movie)
    return(
        <div className="mov">
            <h3>{found.title}</h3>
            <h3>Trailer :</h3>
            <h1>{found.url}</h1>
        </div>
    )
}
export default Movie