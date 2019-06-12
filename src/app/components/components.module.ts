import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideBackdropComponent } from './slide-backdrop/slide-backdrop.component';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SlideShowParesComponent } from './slide-show-pares/slide-show-pares.component';

@NgModule({
  declarations: [
    SlideBackdropComponent,
    SlideShowPosterComponent,
    EncabezadoComponent,
    SlideShowParesComponent
  ],
  exports: [
    SlideBackdropComponent,
    SlideShowPosterComponent,
    EncabezadoComponent,
    SlideShowParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
