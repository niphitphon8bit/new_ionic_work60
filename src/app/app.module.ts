import { ExpertInInsertPage } from './expert-in-insert/expert-in-insert.page';
import { HttpClientModule } from '@angular/common/http';
import { MajorInsertPage } from './major-insert/major-insert.page';
import { DevelopsInsertPage } from './develops-insert/develops-insert.page';
import { FoodInsertPage } from './food-insert/food-insert.page';
import { PlaceInsertPage } from './place-insert/place-insert.page';
import { BankInsertPage } from './bank-insert/bank-insert.page';
import { Http, HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillInsertPage } from './skill-insert/skill-insert.page';
import { ExpertTypeInsertPage } from './expert-type-insert/expert-type-insert.page';
import {ExpertInUpdatePage} from "./expert-in-update/expert-in-update.page"
import { FoodUpdatePage } from './food-update/food-update.page';

@NgModule({
  declarations: [
    AppComponent,
    BankInsertPage,
    PlaceInsertPage,
    FoodInsertPage,
    ExpertTypeInsertPage,
    DevelopsInsertPage,
    MajorInsertPage,
    ExpertInInsertPage,
    FoodUpdatePage,
    ExpertInUpdatePage
  ],
  entryComponents: [
    BankInsertPage,
    PlaceInsertPage,
    FoodInsertPage,
    ExpertTypeInsertPage,
    DevelopsInsertPage,
    MajorInsertPage,
    ExpertInInsertPage,
    FoodUpdatePage,
    ExpertInUpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
