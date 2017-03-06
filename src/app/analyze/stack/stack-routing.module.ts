import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StackOverviewComponent } from './stack-overview/stack-overview.component';

import { StackComponent } from './stack.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pmuir/BalloonPopGame/stack',
    pathMatch: 'full'
  },
  {
    path: '',
    component: StackComponent,
    children: [
      {
        path: '',
        component: StackOverviewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackRoutingModule { }