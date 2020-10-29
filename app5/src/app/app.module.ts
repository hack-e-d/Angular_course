import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { AtmComponent } from './atm/atm.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
