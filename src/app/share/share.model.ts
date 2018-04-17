import { AvatarComponent } from './components/avatar/avatar.component';
import { MaterialModule } from './modules/material.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    AvatarComponent
  ],
  entryComponents: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    AvatarComponent,
    ReactiveFormsModule
  ],
})
export class ShareModule { }
