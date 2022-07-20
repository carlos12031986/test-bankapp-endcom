import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CuentaService } from 'src/app/cuentas/services/cuenta.service';
import { Cuenta } from '../../cuentas/interfaces/cuenta';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  usuario! : Observable<string>;
  ultimaSesion!: Observable<string>
  cuenta!: Cuenta;
  constructor(
    private _services:CuentaService,
    private _router: Router) { }

  ngOnInit(): void {
    this._services.getSesion().subscribe(
      cuenta=>{
        this.cuenta = cuenta;
        this.usuario =  of(this.cuenta.cuenta[0].nombre);
        this.ultimaSesion =  of(this.cuenta.cuenta[0].ultimaSesion);

        }
    )
  }

  go(opcion:number){
    if(opcion == 1)
      this._router.navigate(['./cuentas/listado']);
    else
    this._router.navigate(['./cuentas/error']);
  }
}
