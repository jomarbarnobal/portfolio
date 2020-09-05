import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home, Projects, About, Skills } from './pages'


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: Home, data: { animation: 'isRight'} },
  { path: "projects", component: Projects, data: { animation: 'isLeft'} },
  { path: 'skills', component: Skills, data: { animation:'isRight'} },
  { path: 'about', component: About, data: { animation: 'isLeft'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
