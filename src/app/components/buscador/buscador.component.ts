import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];

  termino!: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesServicio: HeroesService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      // console.log(param.termino); lo que se ve en la url
      this.heroes = this.heroesServicio.buscarHeroes(param['termino']);
      this.termino = param['termino'];
      console.log(this.heroes);
    });
  }

}