import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  peliculasPoster: Pelicula[] = [];
  populares: Pelicula[] = [];
  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };
  slideOptsPoster = {
    slidesPerView: 3,
    freeMode: false,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    spaceBetween: -10
  };
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getFeature()
      .subscribe( (resp) => {
        this.peliculasRecientes = resp.results.filter(pelicula => pelicula.backdrop_path);
        this.peliculasPoster = resp.results.filter(pelicula => pelicula.poster_path);
      });
    this.movieService.getPopulares()
      .subscribe((resp) => {
        this.populares = resp.results.filter(pelicula => pelicula.poster_path);
      });
  }
}
