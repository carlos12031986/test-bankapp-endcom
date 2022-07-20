export interface Saldo {
  saldos: SaldoElement[];
}

export interface SaldoElement {
  cuenta:       number;
  saldoGeneral: number;
  ingresos:     number;
  gastos:       number;
  id:           number;
}
