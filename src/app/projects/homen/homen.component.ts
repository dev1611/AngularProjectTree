import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { ProjectsService } from '../projects.service';

declare var window: any;

@Component({
  selector: 'app-homen',
  templateUrl: './homen.component.html',
  styleUrls: ['./homen.component.css']
})
export class HomenComponent implements OnInit {
  allProject : Projects[] =[];
  deleteModal: any;
  idTodelete: number = 0;
  taskEx : any;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
  get() {
    this.projectService.get().subscribe((data) => {
      this.allProject = data ;
      let res = data[0]
      this.taskEx = res['tasks']; 
      
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.projectService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allProject = this.allProject.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
