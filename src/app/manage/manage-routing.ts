import { AuthGuard } from './../auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path: 'home',
        loadChildren: "app/home/home.module#HomeModule"
      },
      {
        path: 'create',
        loadChildren: "app/create/create.module#CreateModule"
      },
      {
        path: 'list',
        loadChildren: "app/list/list.module#ListModule"
      },
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
