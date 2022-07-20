export interface Movimientos {
  movimientos: Movimiento[];
}

export interface Movimiento {
  fecha:       string;
  descripcion: string;
  monto:       string;
  tipo:        Tipo;
  id:          number;
}

export enum Tipo {
  Abono = "abono",
  Cargo = "cargo",
}
