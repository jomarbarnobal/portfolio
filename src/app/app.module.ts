// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Services
import { ProjectService } from './services/project.service'
// Shared Component
import { Navigation } from './shared/navigations/navigations.component';
import { FooterComponnent } from './shared/footer/footer.component'

// Pages
import { 
        Home,
       } from './pages';

// Custom Directives
import { ParallaxDirective } from './parallax.directive';
import { NavScrollDirective } from './nav-scroll.directive'


@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Home,
    ParallaxDirective,
    NavScrollDirective,
    FooterComponnent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ProjectService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
