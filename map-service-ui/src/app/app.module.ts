import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOX4VFz130IisVNp4ZXQYSrUSZBLRRcns'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
