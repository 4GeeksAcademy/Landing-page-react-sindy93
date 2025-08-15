export default function Jumbotron() {
  return (
    <div
      className="my-6"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/4GeeksAcademy/Landing-page-react-sindy93/refs/heads/main/src/img/banner-principal-codigo-ancestral.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className="p-5 mb-4 bg-dark bg-opacity-50">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold"> Bienvenid@s al Código Ancestral</h1>
          <p className="col-md-8 mx-auto fs-3">
            Sabiduría antigua, fuerza femenina. 
            Cuatro culturas, cuatro guardianas,
             un solo legado oculto entre símbolos.
          </p>
          <button className="btn btn-light btn-lg" type="button">
          Descubre a las Arcanas
          </button>
        </div>
      </div>
    </div>
  );
}
