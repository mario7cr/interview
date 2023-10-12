import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-first-exercise',
  templateUrl: './first-exercise.component.html',
  styleUrls: ['./first-exercise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstExerciseComponent { }
