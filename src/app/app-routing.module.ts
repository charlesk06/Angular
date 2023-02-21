import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';

const routes: Routes = [
  //Creat routing path and components
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
