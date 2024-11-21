import { useParams } from "react-router-dom";

export const CancionActualizar = () => {
  const { id } = useParams();

  return (
    <div className="container py-4">
      <h1>Actualizar Canción</h1>
      <p>Estás editando la canción con ID: {id}</p>
      {/* Aquí podrías cargar datos específicos de la canción con el ID */}
    </div>
  );
};
