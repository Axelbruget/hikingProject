import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { DataFetcherService } from '../services/data-fetcher.service';
import { TimerModule } from '../timer/timer.module';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  providers: [
    DataFetcherService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
