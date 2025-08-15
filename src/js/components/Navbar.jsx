export default function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f1e5d4" }}>
      <div className="container d-flex align-items-center">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="https://raw.githubusercontent.com/4GeeksAcademy/Landing-page-react-sindy93/refs/heads/main/src/img/logo-codigo-ancestral.png"
            alt="Logo"
            width="200"
            height="80"
            className="d-inline-block align-top"
          />
        </a>

        {/* Menú (centrado/izquierda) */}
        <div className="d-flex gap-4 align-items-center ms-4">
          <p className="mb-0" style={{ color: "#553114" }}>Inicio</p>
          <p className="mb-0" style={{ color: "#553114" }}>Blog</p>
          <p className="mb-0" style={{ color: "#553114" }}>Celtas</p>
          <p className="mb-0" style={{ color: "#553114" }}>Griegos</p>
          <p className="mb-0" style={{ color: "#553114" }}>Egipcios</p>
          <p className="mb-0" style={{ color: "#553114" }}>Nórdicos</p>
        </div>

        {/* Derecha: buscador + iconos */}
        <div className="d-flex align-items-center ms-auto gap-2">
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-dark" type="submit">
                Buscar
              </button>
            </div>
          </form>

          {/* Íconos (Bootstrap Icons) */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: "#553114", fontSize: "1.5rem" }}
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: "#553114", fontSize: "1.5rem" }}
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
