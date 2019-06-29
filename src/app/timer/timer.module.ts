import { NgModule } from '@angular/core';
import { TimerComponent } from './timer.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TimerComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  providers: [
  ],
  exports: [
    TimerComponent,
  ],
})
export class TimerModule {}
