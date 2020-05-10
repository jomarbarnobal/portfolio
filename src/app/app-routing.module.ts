import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages'


const routes: Routes = [
  { path: "home", pathMatch: 'full', component: Home},
  { path: "", redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
