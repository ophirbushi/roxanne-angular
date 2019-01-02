import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoxanneAngularModule } from 'roxanne-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoxanneAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
