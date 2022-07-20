import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { MaterialModule } from '../material/material.module';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ErrorComponent } from './pages/error/error.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    ListadoComponent,
    TarjetaComponent,
    ErrorComponent,
    TablaComponent,
  ],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    MaterialModule
  ],
  providers:[]
})
export class CuentasModule { }
