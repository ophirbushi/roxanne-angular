import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoxanneAngularModule } from 'roxanne-angular';
import { AppState, AppActions } from './models';
import { appReducerFactory } from './reducer';
import { appEffects } from './effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoxanneAngularModule.forRoot<AppState, AppActions>({ money: 0 }, appReducerFactory, [appEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
