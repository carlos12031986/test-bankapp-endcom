export interface Cuenta {
  cuenta: CuentaElement[];
}

export interface CuentaElement {
  cuenta:       number;
  nombre:       string;
  ultimaSesion: string;
  id:           number;
}
