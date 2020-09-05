import { Component, OnInit } from '@angular/core'
import { ProjectService } from '../../services/project.service'
import { runInThisContext } from 'vm'

@Component({
   templateUrl: './projects.component.html'
})

export class Projects implements OnInit{
    projects = []

    constructor(private _projectService: ProjectService){}

    ngOnInit() {
        this._projectService.getProjects()
            .subscribe((data: any[]) => {
            console.log(data);
            this.projects = data;
        })
    }
}
