import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';

import { OutputLogComponent } from './components/output-log/output-log.component'
import {StopwatchComponent} from "./components/stopwatch/stopwatch.component";
import {UsersComponent} from "./components/users/users.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    OutputLogComponent,
    StopwatchComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,

    StopwatchComponent,
    UsersComponent,
    OutputLogComponent
  ]
})
export class SharedModule { }
