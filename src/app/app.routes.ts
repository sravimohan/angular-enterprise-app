import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent, canActivate: [ MsalGuard ] },
  { path: 'second-component', component: SecondComponent, canActivate: [ MsalGuard ] },
];
