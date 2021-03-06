import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './services/newsapi.service';
import { UnsplashApiService } from './services/unsplash-api.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ArticlesHackernewsComponent } from './articles-hackernews/articles-hackernews.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { JobsHackernewsComponent } from './jobs-hackernews/jobs-hackernews.component';
import { BingImageSearchService } from './services/bing-image-search.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesHackernewsComponent,
    SanitizeHtmlPipe,
    JobsHackernewsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [NewsapiService, UnsplashApiService, BingImageSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
