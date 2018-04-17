import { ShareModule } from './../share/share.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    ShareModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }
