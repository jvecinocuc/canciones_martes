export class Cancion {
    public codCancion: number;
    public nombreCancion: string;
    public artistaCancion: string;
    public generoCancion: string;
    public imagenCancion: string;
    public imagenCancionBase64: string;
  
    constructor(
      codc: number,
      nomb: string,
      artc: string,
      gene: string,
      imag: string,
      base: string
    ) {
      this.codCancion= codc;
      this.nombreCancion=nomb;
      this.artistaCancion=artc;
      this.generoCancion=gene;
      this.imagenCancion=imag;
      this.imagenCancionBase64=base;
  }
}