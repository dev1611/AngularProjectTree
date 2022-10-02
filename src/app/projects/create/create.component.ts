import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  projectForm: Projects = {
    id: 0,
    name: ''
   
  };

  constructor(private projectService:ProjectsService,
    private router:Router) { }

  ngOnInit(): void {
  }
  create(){
    this.projectService.create(this.projectForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/projects/homen"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
