import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navigation } from './shared/navigations/navigations.component';
import { Home } from './pages';
import { ParallaxDirective } from './parallax.directive';
import { NavScrollDirective } from './nav-scroll.directive'

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Home,
    ParallaxDirective,
    NavScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
