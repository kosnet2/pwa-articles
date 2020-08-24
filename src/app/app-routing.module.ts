import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemManagerComponent } from './components/item-manager/item-manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/bestStories', pathMatch: 'full' },
  { path: 'bestStories', component: ItemManagerComponent },
  { path: 'jobStories', component: ItemManagerComponent },
  { path: 'newStories', component: ItemManagerComponent },
  { path: 'askStories', component: ItemManagerComponent },
  { path: 'showStories', component: ItemManagerComponent },
  { path: 'topStories', component: ItemManagerComponent },
  { path: '**', redirectTo: '/bestStories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
