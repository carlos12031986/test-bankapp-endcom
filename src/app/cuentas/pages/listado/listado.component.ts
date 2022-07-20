import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { CuentaService } from '../../services/cuenta.service';

import { TarjetaElement } from '../../interfaces/tarjeta';
import { Saldo } from '../../interfaces/saldo';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  constructor(
    private _service: CuentaService,
    private _dialog:MatDialog) { }

  tarjetas: TarjetaElement[] = [];
  saldoGeneral! : Observable<string>;
  ingresos!    : Observable<string>;
  gastos!      : Observable<string>;


  ngOnInit(): void {
    this._service.getSaldos().subscribe((saldos:Saldo)=>{
      this.saldoGeneral = of(saldos.saldos[0].saldoGeneral.toString());
      this.ingresos     = of(saldos.saldos[0].ingresos.toString());
      this.gastos       = of(saldos.saldos[0].gastos.toString());
    });

    this._service.getTarjetas().subscribe(
      response=>{
        this.tarjetas = response.tarjetas;
        console.log(this.tarjetas.length)
      }
    );
  }

  agregar(){
    this._dialog.open(DialogComponent,{width:'40%',data:{}})
  }
}
