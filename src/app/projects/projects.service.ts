import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Projects[]>('http://localhost:3000/projects');
  }
  create(payload: Projects) {
    return this.http.post<Projects>('http://localhost:3000/projects', payload);
  }
  getById(id: number) {
    return this.http.get<Projects>(`http://localhost:3000/projects/${id}`);
   }
   update(payload:Projects){
    return this.http.put(`http://localhost:3000/projects/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Projects>(`http://localhost:3000/projects/${id}`);
 }
}
