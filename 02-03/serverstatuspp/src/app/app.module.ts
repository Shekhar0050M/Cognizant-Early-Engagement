import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerstatusComponent } from './serverstatus/serverstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerstatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
