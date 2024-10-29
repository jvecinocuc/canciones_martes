export const CancionCrear = () => {
  return (
    <>
    <div className="pt-5 d-flex justify-content-center">
      <div className="col-md-8">
      <form className="row g-3 needs-validation">
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">
            Titulo cancion
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip01"
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip02" className="form-label">
            Artista
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip02"
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-6 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">
            Duracion
          </label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip03"
            required
          />
          <div className="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip04" className="form-label">
            Genero
          </label>
          <select className="form-select" id="validationTooltip04" required>
            <option selected disabled value="">
              Seleccione genero...
            </option>
            <option>Vallenato</option>
            <option>Salsa</option>
            <option>Lofi Beats</option>
            <option>Pop</option>
            <option>K-Pop</option>
            <option>Reggaeton</option>
          </select>
          <div className="invalid-tooltip">Please select a valid state.</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
};
