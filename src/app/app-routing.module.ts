import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '**', component: EmptyRouteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' + (window.location.pathname.split('/')[1] || '') }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
