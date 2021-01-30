import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemeberDetailsComponent } from './members/memeber-details/memeber-details.component';
import { MemeberListComponent } from './members/memeber-list/memeber-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AutGuard } from './_gards/aut.guard';
import {TestErrosComponent} from './errors/test-erros/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate:[AutGuard],
    children:[
      {path:'members', component: MemeberListComponent},
      {path:'members/:username', component: MemeberDetailsComponent},
      {path:'member/edit', component: MemberEditComponent},
      {path:'lists', component: ListsComponent},
      {path:'messages', component: MessagesComponent},
    ]
  },
  {path:'errors', component: TestErrosComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'server-error', component: ServerErrorComponent},
  {path:'**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
