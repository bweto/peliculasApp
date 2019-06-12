import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-backdrop',
  templateUrl: './slide-backdrop.component.html',
  styleUrls: ['./slide-backdrop.component.scss'],
})

export class SlideBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[];
  @Input() slideOpts: {};
  constructor() { }

  ngOnInit() {}

}
