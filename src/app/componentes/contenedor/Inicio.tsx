export const Inicio = ()=>{
    return(
        <>
       <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= "Illit.jpg" className="d-block w-100" alt="Illit"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Illit</h5>
        <p>Grupo debutante de Kpop, que la esta rompiendo con su talento!.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="maluma.jpg" className="d-block w-100" alt="Maluma"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Maluma</h5>
        <p>El pretty boy en su momento de prime 😎.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="diomedes.jpg" className="d-block w-100" alt="Diomedes diaz"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Diomedes Diaz</h5>
        <p>El rey del vallenato y el papa de los pollitos 🥵.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="joe.jpg" className="d-block w-100" alt="Joe Arroyo"></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Joe Arroyo</h5>
        <p>El rey del porro, el que te pone a bailar una noche y otra.</p>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}