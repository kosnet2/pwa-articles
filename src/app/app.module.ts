// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ServiceWorkerModule } from '@angular/service-worker';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Services
import { NewsapiService } from './services/newsapi.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { ItemComponent } from './components/item/item.component';
import { ItemManagerComponent } from './components/item-manager/item-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemDetailsComponent,
    ExpansionPanelComponent,
    ItemComponent,
    ItemManagerComponent,
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
    MatExpansionModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
