import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'remote',
    loadComponent: () => loadRemoteModule('remote', 'component'),
  },
];
