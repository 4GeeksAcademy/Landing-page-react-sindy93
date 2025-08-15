export default function Footer() {
  return (
    <footer
      className="text-white text-center py-3 mt-5"
      style={{ backgroundColor: "#553114ff" }}
    >
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} Código Ancestral. Todos los derechos reservados.
        </p>

        <div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
