import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotatkaComponent } from './notatka/notatka.component';
import { NotatkaListaComponent } from './notatka-lista/notatka-lista.component';

import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import { HttpClientModule } from '@angular/common/http';


import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [NotatkaComponent, NotatkaListaComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
  ],
  exports: [
    NotatkaListaComponent
  ]
})
export class ForSesModule { }
