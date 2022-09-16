// import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InicioComponent } from './components/inicio/inicio.component';


const APP_ROUTES: Routes = [
    { path: ' ', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];



export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
