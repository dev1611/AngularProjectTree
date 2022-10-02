import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  projectForm: Projects = {
    id: 0,
    name: '',
    tasks:[]
  };

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  getById(id: number) {
    this.projectService.getById(id).subscribe((data) => {
      this.projectForm = data;
    });
  }

  update() {
    this.projectService.update(this.projectForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/projects/homen"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }


}
