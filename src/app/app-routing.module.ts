import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SprintComponent } from './sprint/sprint.component';
import { RaceComponent } from './race/race.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'sprint',component:SprintComponent},
  {path:'sprint/race',component:RaceComponent},
  {path:'sprint/race/result',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
