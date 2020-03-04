import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotatkaListaComponent } from './4ses/notatka-lista/notatka-lista.component';


const routes: Routes = [
  {path: 'notatka', component: NotatkaListaComponent},
  {path: '', redirectTo: 'notatka', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
