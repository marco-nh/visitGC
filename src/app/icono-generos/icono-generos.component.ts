import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icono-generos',
  templateUrl: './icono-generos.component.html',
  styleUrls: ['./icono-generos.component.scss'],
})
export class IconoGenerosComponent  implements OnInit {
  @Input() generos:string='';

  constructor() { }

  ngOnInit() {}

}
