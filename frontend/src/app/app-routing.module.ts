import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotatkaListaComponent } from './4ses/notatka-lista/notatka-lista.component';
import { EgzaminyComponent } from './4ses/egzaminy/egzaminy.component';


const routes: Routes = [
  {path: 'notatka', component: NotatkaListaComponent},
  {path: 'egzaminy', component: EgzaminyComponent},

  {path: '', redirectTo: 'notatka', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
