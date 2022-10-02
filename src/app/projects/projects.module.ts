import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { HomenComponent } from './homen/homen.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    HomenComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
