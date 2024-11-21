import { useState } from "react";
import { Cancion } from "../modelos/Cancion";
import { ARREGLO_CANCIONES } from "../mocks/Canciones_mocks";
import { ARREGLO_CANCION_GENERO } from "../../utilidades/dominios/domgenero";

export const CancionListar = () => {
  const [arrCancion] =useState<Cancion[]>(ARREGLO_CANCIONES);

  const obtenerNombre =(valor: string)=>{
    for(const objGenero of ARREGLO_CANCION_GENERO){
      if(objGenero.codGenero==valor){
        return objGenero.nombreGenero;
      }
    }
  }
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{width: "5%"}}>Código</th>
                <th style={{width: "30%"}}>Nombre Cancion</th>
                <th style={{width: "25%"}}>Artista</th>
                <th style={{width: "20%"}}>Genero</th>
                <th style={{width: "20%"}}>imagen</th>
              </tr>
            </thead>
            <tbody>

              {arrCancion.map((miCan: Cancion)=>( 
                <tr>
                <td>{miCan.codCancion}</td>
                <td>{miCan.nombreCancion}</td>
                <td>{miCan.artistaCancion}</td>
                <td>{obtenerNombre(miCan.generoCancion)}</td>
                <td>
                  <img src={miCan.imagenCancionBase64} alt={miCan.nombreCancion} className="imagenListado" />
                
                  <br />
                  <td>{miCan.imagenCancion}</td></td>
              </tr>))}
              
          
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
  
