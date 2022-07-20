import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Movimiento } from '../../interfaces/movimientos';
import { CuentaService } from '../../services/cuenta.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _service: CuentaService) { }

  ELEMENT_DATA: Movimiento[] = [];
  displayedColumns: string[] = ['indice','fecha', 'descripcion', 'monto'];
  dataSource = new MatTableDataSource<Movimiento>([]);

  ngOnInit(): void {
    this._service.getMovimientos().subscribe(
      movimientos=>{
        this.ELEMENT_DATA = movimientos.movimientos

        this.dataSource = new  MatTableDataSource( this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getColor(tipo:string){
    let color = "";
    if(tipo == "abono")
      color ="green"
    else if(tipo == "cargo")
      color ="red"

    return color;
  }

}

