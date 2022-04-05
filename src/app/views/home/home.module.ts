import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StopwatchComponent } from 'src/app/components/stopwatch/stopwatch.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { FirstExerciseComponent } from './first-exercise/first-exercise.component';
import { SecondExerciseComponent } from './second-exercise/second-exercise.component';

@NgModule({
  declarations: [HomeComponent, StopwatchComponent, UsersComponent, FirstExerciseComponent, SecondExerciseComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
