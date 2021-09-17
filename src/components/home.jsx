import { Link } from "react-router-dom";
import "../css/home.css";
function Home() {
    return (


<div className="App">
 <header>
   <div className="games-grid">
     <div className="main-image">
       <div className="text">
         <p className="title">Black Jack</p>
         <p className="info">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Inventore officia aliquid quod adipisci natus q.
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Inventore officia aliquid quod adipisci natus q.
         </p>
         <Link to="/login" className="button">Play Now</Link>
       </div>
     </div>
     <Link to="/play" className="small-image a">
       <div>
         <p className="small-title">Black Jack</p>

       </div>
     </Link>
     <Link  to="/play"  className="small-image b">
       
       <div>
             <p className="small-title">Black Jack</p>
       </div>
     </Link>
     <Link  to="/play"  className="small-image c">
       <div>
             <p className="small-title">Black Jack</p>
       </div>
     </Link>
     <Link  to="/play"  className="small-image d">
       <div>
             <p className="small-title">Black Jack</p>
       </div>
     </Link>
   </div>
 </header>
</div>
     
    );
  }
  
  export default Home;