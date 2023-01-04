import Cimacard from "./Cimacard"

const Cimalist =({movies,setMovies,titre,etoile})=>{
    const x =  movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile).map(el=> <Cimacard  key={el.id} el={el} movies={movies} setMovies={setMovies}/>)

    return (
    <div className="bou">
        {
             x.length == 0 ? <h1> Not found 404  </h1> : x
        }

</div>
    )
}
export default Cimalist