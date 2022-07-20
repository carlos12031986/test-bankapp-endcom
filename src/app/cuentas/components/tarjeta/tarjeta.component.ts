import { Component, Input, OnInit } from '@angular/core';
import { TarjetaElement } from '../../interfaces/tarjeta';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() tarjeta!: TarjetaElement;
  constructor() { }

  ngOnInit(): void {
  }

  getColor(index:number){
    if(index%2==0)
      return "#08bc94";
    else
      return "#9ed2ff";
  }

}
