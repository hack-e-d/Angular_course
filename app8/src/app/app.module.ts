import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UppercaseConverterService} from './services/uppercase-converter.service';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseConverterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [UppercaseConverterService],
  bootstrap: [UppercaseConverterComponent]
})
export class AppModule { }
