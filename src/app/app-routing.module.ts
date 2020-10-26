import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {SidebarComponent} from './components/sidebar/sidebar';



const appRoutes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full' ,
},
{
    path: 'home',
    component: HomeComponent
},

{
    path: 'about',
    component: AboutComponent
},
{
    path: 'services',
    component: ServicesComponent
},
{
    path: 'sidebar',
    component: SidebarComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

