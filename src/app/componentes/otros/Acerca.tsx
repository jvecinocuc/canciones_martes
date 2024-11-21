import { Link } from "react-router-dom";

export const Acerca = () => {
  return (
    <>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              className="me-2"
              viewBox="0 0 118 94"
              role="img"
            >
              <title>Música</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="fs-4">Sobre Canciones</span>
          </Link>
        </header>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Descubre el mundo de las canciones</h1>
            <p className="col-md-8 fs-4">
              Este es un espacio para los amantes de la música y las canciones.
              Aquí puedes explorar, crear y gestionar tus canciones favoritas,
              aprendiendo sobre compositores, estilos y mucho más.
            </p>
            <Link to="/canlis">
              <button className="btn btn-primary btn-lg" type="button">
                Ver Canciones
              </button>
            </Link>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Crear Canciones</h2>
              <p>
                Si tienes ideas únicas o quieres guardar tus composiciones,
                aquí puedes registrar nuevas canciones para compartir o
                simplemente para llevar un registro personal.
              </p>
              <Link to="/cancre">
                <button className="btn btn-outline-light" type="button">
                  Registrar Canciones
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Administrar y Editar</h2>
              <p>
                Mantén tus canciones organizadas. Edita detalles como letras,
                compositores, géneros y mucho más desde el panel de
                administración.
              </p>
              <Link to="/canadmin">
                <button className="btn btn-outline-secondary" type="button">
                  Administrar Canciones
                </button>
              </Link>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-body-secondary border-top">
          © 2024 Canciones App - Hecho con ❤️ para los amantes de la música.
        </footer>
      </div>
    </>
  );
};
