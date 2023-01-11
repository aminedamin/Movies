import { Link } from "react-router-dom"


const Navcima =()=>{
    return (
      <div className='Menu'>
        <img src='/net.png' alt='Not found'></img>
        <ul>
  <li><Link to="/" >Home</Link></li>
  <li><Link to="/cimalist">TV Show</Link></li>
  {/* <li><a href="contact.asp">Series</a></li> */}
</ul>
</div>
    )
}
export default Navcima