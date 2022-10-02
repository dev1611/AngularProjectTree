import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomenComponent } from './homen/homen.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [{
  path:'projects/homen',
  component:HomenComponent
},
{
  path:'projects/create',
  component:CreateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
