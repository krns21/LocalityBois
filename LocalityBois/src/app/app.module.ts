import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremCardComponent } from './prem-card/prem-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ChampCardComponent } from './champ-card/champ-card.component';
import { BallondorCardComponent } from './ballondor-card/ballondor-card.component';
import { FacupCardComponent } from './facup-card/facup-card.component';
import { EuropCardComponent } from './europ-card/europ-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PremCardComponent,
    ToolbarComponent,
    ChampCardComponent,
    BallondorCardComponent,
    FacupCardComponent,
    EuropCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
