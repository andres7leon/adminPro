import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      {path: 'progress', component: ProgressComponent, data: { titulo: 'Progreso' }},
      {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' }},
      {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
      {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' }},
      {path: 'rxjs', component: RxjsComponent, data: { titulo: 'Dashboard' }},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule]
})

export class PAGES_ROUTES { }
