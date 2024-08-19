import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
