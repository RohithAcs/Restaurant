import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './module/cart-page/cart-page.component';
import { FoodPageComponent } from './module/food-page/food-page.component';
import { LoginComponent } from './module/login/login.component';
import { RestaurantDashComponent } from './module/restaurant-dash/restaurant-dash.component';
import { SignupComponent } from './module/signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'restaurant', component: RestaurantDashComponent
  },
  { path: 'search/:searchTerm', component: RestaurantDashComponent },
  { path: 'tag/:tag', component: RestaurantDashComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
