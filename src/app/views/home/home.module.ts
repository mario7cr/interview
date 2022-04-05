import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { HomeComponent } from './home.component';
import { StopwatchComponent } from 'src/app/shared/components/stopwatch/stopwatch.component';
import { UsersComponent } from 'src/app/shared/components/users/users.component';
import { FirstExerciseComponent } from './first-exercise/first-exercise.component';
import { SecondExerciseComponent } from './second-exercise/second-exercise.component';

@NgModule({
  declarations: [
    HomeComponent,
    StopwatchComponent,
    UsersComponent,
    FirstExerciseComponent,
    SecondExerciseComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CoreModule],
})
export class HomeModule {}
