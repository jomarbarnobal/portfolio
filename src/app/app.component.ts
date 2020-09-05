import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimation} from './_animation/route.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    slideAnimation
  ]

})
export class AppComponent {
  title = 'ng-jomar';

  animateRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
