import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstExerciseComponent } from './first-exercise/first-exercise.component';
import { HomeComponent } from './home.component';
import { SecondExerciseComponent } from './second-exercise/second-exercise.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'first-exercise', component: FirstExerciseComponent },
      { path: 'second-exercise', component: SecondExerciseComponent },
      { path: '', redirectTo: 'first-exercise' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
