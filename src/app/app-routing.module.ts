import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'hiking/:id', loadChildren: './hiking-detail/hiking-detail.module#HikingDetailPageModule' },
  { path: 'hiking-in-progress/:id', loadChildren: './hiking-in-progress/hiking-in-progress.module#HikingInProgressPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
