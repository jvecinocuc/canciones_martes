export const CancionAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>Titulo Cancion</th>
                <th>Artista</th>
                <th>Duracion</th>
                <th>Genero</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>1</td>
                <td>La noche</td>
                <td>Joe arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
                <td>
                  <a href="/canact/1">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </a>
                  &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#e10000" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Camino largo</td>
                <td>Diomedes diaz</td>
                <td>4.7</td>
                <td>Vallenato</td>
                <td>
                <a href="/canact/1">
                  <i className="fa-solid fa-pen-to-square"></i>
                </a>
                  &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#e10000" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Borro Cassette</td>
                <td>Maluma</td>
                <td>4.8</td>
                <td>Reggaeton</td>
                <td>
                <a href="/canact/1">
                  <i className="fa-solid fa-pen-to-square"></i>
                </a>
                  &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#e10000" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Magnetic</td>
                <td>Illit</td>
                <td>3.9</td>
                <td>K-pop</td>
                <td>
                <a href="/canact/1">
                  <i className="fa-solid fa-pen-to-square"></i>
                </a>
                  &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#e10000" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
