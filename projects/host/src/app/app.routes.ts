import {Routes} from '@angular/router';
import {loadRemoteModule} from "@angular-architects/native-federation";
import {HomeComponent} from "./home.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'remote',
    loadComponent: () => loadRemoteModule('remote', 'component')
  }];
