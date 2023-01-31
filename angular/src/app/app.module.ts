import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { Routes, RouterModule } from '@angular/router';
import { ProductDisplayComponent } from './product-display/product-display.component';

const routes: Routes = [{ path: '',  component: HomeComponent},
                        { path: 'product',  component: ProductsComponent}];


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
