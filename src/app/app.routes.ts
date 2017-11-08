import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedComponent } from './red.component';
import { GreenComponent } from './green.component';
import { BlueComponent } from './blue.component';

const routes: Routes = [
  {path: '', redirectTo: '/green', pathMatch: 'full'},
  {path: 'red', component: RedComponent},
  {path: 'green', component: GreenComponent},
  {path: 'blue', component: BlueComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
