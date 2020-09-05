import { Component, OnInit } from '@angular/core'
import { ProjectService } from '../../services/project.service'
import { runInThisContext } from 'vm';

@Component({
    templateUrl: './home.component.html'
})

export class Home implements OnInit{

 name = 'Jomar'

 ngOnInit(){}
}
