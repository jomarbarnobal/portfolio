import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages'


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: "home", component: Home}
  // { path: "projects/:id", component: ProjectDetails }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
