import { NgModule } from '@angular/core';
// componets
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
// routes
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'node_modules/ng2-charts';
import { GraficasComponent } from '../components/graficas/graficas.component';
import { BrowserModule } from '@angular/platform-browser';
// libs


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficasComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
    ],
  imports : [
        BrowserModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
      ]
})
export class PagesModule { }

