export class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  mostrar() {
    console.log(`hola ${this.nombre} de ${this.edad}`);
  }
}

export const colegio = {
  nombre: "MGP",
  direccion: "huaycan",
  años: 200,
  mostrardato: function () {
    console.log(
      `el colegio ${this.nombre} esta en ${this.direccion} y tiene ${this.años} años`
    );
  },
};
