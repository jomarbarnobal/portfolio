import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    private projectApiUrl = 'http://localhost:3000/v1/projects' //Projects url
    headers = new HttpHeaders().set('Content-Type', 'application/json')

    constructor(private _httpClient: HttpClient) {
        
    }
    // get all projects
    getProjects(){
        return this._httpClient.get(`${this.projectApiUrl}`)
    };
}
