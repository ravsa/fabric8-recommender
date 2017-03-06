import { StackDetailsModule } from './stack-details/stack-details.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackComponent } from './stack.component';
import { StackRoutingModule } from './stack-routing.module';

import { StackOverviewModule } from './stack-overview/stack-overview.module';

@NgModule({
  imports: [
    StackOverviewModule,
    CommonModule,
    StackRoutingModule
  ],
  declarations: [StackComponent]
})
export class StackModule {
  constructor() { }
}