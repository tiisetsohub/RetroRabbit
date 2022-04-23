import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './tab/tab.component';
import { DetailsComponent } from './details/details.component';
import { Tab2Component } from './tab2/tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    HomeComponent,
    TabComponent,
    DetailsComponent,
    Tab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
