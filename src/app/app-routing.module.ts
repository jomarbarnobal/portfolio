import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home, Projects, About, Skills } from './pages'


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: Home },
  { path: "projects", component: Projects },
  { path: 'skills', component: Skills },
  { path: 'about', component: About }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
