import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { RestaurantDashComponent } from './module/restaurent-dash/restaurant-dash.component';
import { SignupComponent } from './module/signup/signup.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartPageComponent } from './module/cart-page/cart-page.component';
import { FoodPageComponent } from './module/food-page/food-page.component';
import { TitleComponent } from './module/partials/title/title.component';
import { NotFoundComponent } from './module/partials/not-found/not-found.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './module/partials/search/search.component';
import { TagsComponent } from './module/partials/tags/tags.component';
import { HeaderComponent } from './module/partials/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    RestaurantDashComponent,
    LoginComponent,
    SignupComponent,
    CartPageComponent,
    FoodPageComponent,
    TitleComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule,
    BrowserAnimationsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
