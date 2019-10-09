import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '@src/app/home/home-routing.module';
import { HomeComponent } from '@src/app/home/home.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
