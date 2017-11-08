import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { RedComponent } from './red.component';
import { GreenComponent } from './green.component';
import { BlueComponent } from './blue.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    BlueComponent,
    GreenComponent,
    RedComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule {
}
