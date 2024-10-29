export const CancionListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Titulo Cancion</th>
                <th scope="col">Artista</th>
                <th scope="col">Duracion</th>
                <th scope="col">Genero</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>1</td>
                <td>La noche</td>
                <td>Joe arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Camino largo</td>
                <td>Diomedes diaz</td>
                <td>4.7</td>
                <td>Vallenato</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Borro Cassette</td>
                <td>Maluma</td>
                <td>4.8</td>
                <td>Reggaeton</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Magnetic</td>
                <td>Illit</td>
                <td>3.9</td>
                <td>K-pop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
