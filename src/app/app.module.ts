import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './app-layout/sidebar/sidebar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MainContentComponent } from './app-layout/main-content/main-content.component';
import { HeaderComponent } from './app-layout/header/header.component';
import { FooterComponent } from './app-layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AppLayoutComponent,
    MainContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
