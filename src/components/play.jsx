import "../css/play.css"
function Play({ user, handleLogOut }) {
    return (
      <section className="play">
        <h1>Black Jack</h1>
        <div className="frame">
          <button onClick={handleLogOut}>
            {user}
            logout
          </button>
        </div>
       
      </section>
    );
  }
  
  export default Play;
  