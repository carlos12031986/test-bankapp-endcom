import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formulario: FormGroup = this._fb.group({
    nombre:  [ '', [ Validators.required] ],
    cuenta:  [ '', [ Validators.required] ],
    issuer:  [ '', [ Validators.required] ],
    nombreT: [ '', [ Validators.required] ],
    marca  : [ '', [ Validators.required] ],
    estatus: [ '', [ Validators.required] ],
    saldo:   [ '', [ Validators.required] ],
    tipo:    [ '', [ Validators.required] ],
  })
  constructor(
    private _fb:FormBuilder,
    private _dialogRef: MatDialogRef<DialogComponent>) {
    _dialogRef.disableClose = true;
   }

  ngOnInit(): void {
  }

  cancelar = () => {this._dialogRef.close(false);}

  aceptar = () => {
    if(!this.formulario.valid)
    {
      this.formulario.markAllAsTouched();
      return;
    }

    window.alert(JSON.stringify(this.formulario.value))

  }

}
