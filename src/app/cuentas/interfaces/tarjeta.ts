export interface Tarjeta {
  tarjetas: TarjetaElement[];
}

export interface TarjetaElement {
  tarjeta: string;
  nombre:  string;
  saldo:   number;
  estado:  string;
  tipo:    string;
  id:      number;
}
