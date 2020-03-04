import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotatkaComponent } from './notatka/notatka.component';
import { NotatkaListaComponent } from './notatka-lista/notatka-lista.component';

import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import { HttpClientModule } from '@angular/common/http';


import {MatListModule} from '@angular/material/list';
import { EgzaminyComponent } from './egzaminy/egzaminy.component'; 

@NgModule({
  declarations: [NotatkaComponent, NotatkaListaComponent, EgzaminyComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
  ],
  exports: [
    NotatkaListaComponent,
    EgzaminyComponent,
  ]
})
export class ForSesModule { }
