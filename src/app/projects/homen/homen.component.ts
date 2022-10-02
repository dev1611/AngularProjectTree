import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-homen',
  templateUrl: './homen.component.html',
  styleUrls: ['./homen.component.css']
})
export class HomenComponent implements OnInit {
  allProject : Projects[] =[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.projectService.get().subscribe((data) => {
      this.allProject = data;
    });
  }

}
