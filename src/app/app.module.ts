import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { PlayersComponent } from './components/players/players.component';
import { FightResultComponent } from './components/fight-result/fight-result.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ErrorComponent,
    PlayersComponent,
    FightResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
