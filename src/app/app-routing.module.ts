import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemeberDetailsComponent } from './members/memeber-details/memeber-details.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemeberListComponent } from './members/memeber-list/memeber-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AutGuard } from './_gards/aut.guard';
import {TestErrosComponent} from './errors/test-erros/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { PreventUnsavedChangesGuard } from './_gards/prevent-unsaved-changes.guard';
import { MemeberDetailedResolver } from './_resolvers/member-detailed.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminGuard } from './_gards/admin.guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate:[AutGuard],
    children:[
      {path:'members', component: MemeberListComponent},
      {path:'members/:username', component: MemeberDetailsComponent, resolve:{member: MemeberDetailedResolver}},
      {path:'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},
      {path:'lists', component: ListsComponent},
      {path:'messages', component: MessagesComponent},
      {path:'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
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
