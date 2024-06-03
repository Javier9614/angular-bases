import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModules } from './counter/counter.module';
import { HeroesModules } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';





@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModules,
    DbzModule,
    HeroesModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
