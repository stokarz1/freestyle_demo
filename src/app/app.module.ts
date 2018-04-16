import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SodasComponent } from './sodas/sodas.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SodasComponent,
    HomeMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
