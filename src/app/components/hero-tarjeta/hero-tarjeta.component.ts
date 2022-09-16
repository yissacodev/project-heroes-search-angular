import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html'
})
export class HeroTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input()
  index!: number;
  @Output() hereoSeleccionado: EventEmitter<number>;
  constructor( private router: Router ) {
    // el pare estará escuchando el evento heroeSeleccionado
    this.hereoSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // this.hereoSeleccionado.emit(this.index);
  }

}