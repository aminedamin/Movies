import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Cimalist from './components/Cimalist';
import Navcima from './components/NavCima';
import Search from './components/Search';

function App() {
  const [movies,setMovies]=useState(
    [
      {title : 'Peaky Blinders', description :'Peaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham',posterURL:'/peaky.jpg',rating : 5, id : Math.random()},
      {title : 'Vikings', description :'The series is inspired by the tales of the Norsemen of early medieval Scandinavia',posterURL:'/vikings.jpg',rating : 4, id : Math.random()},
      {title : 'Game of Thrones', description :'Game of Thrones or Game of Thrones is an epic fantasy series written by David Benioff and Daniel Weiss for HBO',posterURL:'/game.jpg',rating : 3, id : Math.random()},
      {title : 'Stranger Things', description :'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl',posterURL:'/stranger.jpg',rating : 2, id : Math.random()}, 
    ]
  )
  const [titre,setTitre] = useState('')
  const [etoile,setEtoile] = useState(0)
  return (
    <div>
      <Navcima/>
      
      <div className='rech'>
      <Search titre={titre} setTitre={setTitre} etoile={etoile} setEtoile={setEtoile}/>
      <Add movies={movies} setMovies={setMovies}/>
      </div>
      
      <Cimalist movies={movies} setMovies={setMovies} titre={titre} etoile={etoile}/>

    </div>
  );
}

export default App;
