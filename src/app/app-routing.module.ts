import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesHackernewsComponent } from './articles-hackernews/articles-hackernews.component';
import { JobsHackernewsComponent } from './jobs-hackernews/jobs-hackernews.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles-hackernews', pathMatch: 'full' },
  { path: 'articles-hackernews', component: ArticlesHackernewsComponent },
  { path: 'jobs-hackernews', component: JobsHackernewsComponent },
  { path: '**', redirectTo: '/articles-hackernews', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
