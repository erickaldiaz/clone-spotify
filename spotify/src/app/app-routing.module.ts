import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: "",
    component: LayoutComponent,
    children: [{ 
      path: "home",
      component: HomeComponent
    }] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
