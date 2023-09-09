import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentsRoutingModule } from './segments-routing.module';
import { CustcompoComponent } from './custcompo/custcompo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustcompoComponent],
  imports: [
    CommonModule,
    SegmentsRoutingModule,
    FormsModule
  ]
})
export class SegmentsModule { }
