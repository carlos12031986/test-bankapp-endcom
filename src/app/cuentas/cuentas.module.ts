import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { CuentasRoutingModule } from './cuentas-routing.module';
import { MaterialModule } from '../material/material.module';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ErrorComponent } from './pages/error/error.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    ListadoComponent,
    TarjetaComponent,
    ErrorComponent,
    TablaComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers:[]
})
export class CuentasModule { }
