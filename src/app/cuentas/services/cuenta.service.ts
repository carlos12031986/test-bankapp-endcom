import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuenta } from '../interfaces/cuenta';
import { Movimientos } from '../interfaces/movimientos';
import { Saldo } from '../interfaces/saldo';
import { Tarjeta } from '../interfaces/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private _http:HttpClient) { }

  getSesion():Observable<Cuenta>
  {
    return this._http.get<Cuenta>(`${environment.url}/cuenta`);
  }


  getSaldos():Observable<Saldo>{
    return this._http.get<Saldo>(`${environment.url}/saldos`);
  }

  getTarjetas():Observable<Tarjeta>{
    return this._http.get<Tarjeta>(`${environment.url}/tarjetas`)
  }

  getMovimientos():Observable<Movimientos>{
    return this._http.get<Movimientos>(`${environment.url}/movimientos`);
    }

}
