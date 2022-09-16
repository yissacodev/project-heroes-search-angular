import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService  } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService ) {
    this.activatedRoute.params
      .subscribe(param => {
        // console.log(param);
        this.heroe = this.heroesService.getHeroe( param['id'] );
        // console.log(this.heroe);
      });
  }

  ngOnInit() {
  }

}