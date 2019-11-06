import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoCheckParentComponent } from './do-check/do-check.component';
import { AfterContentParentComponent } from './after-content/after-content.component';
import { AfterViewComponent } from './after-view/after-view.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'do-check',component:DoCheckParentComponent}
  ,  {path:'after-content',component:AfterContentParentComponent}
  ,  {path:'after-view',component:AfterContentParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
