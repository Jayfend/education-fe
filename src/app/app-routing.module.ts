import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'sprint',component:SprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
