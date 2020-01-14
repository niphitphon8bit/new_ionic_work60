<<<<<<< HEAD
=======
import { ExpertOutInsertPage } from './expert-out-insert/expert-out-insert.page';
import { ExpertOutUpdatePage } from './expert-out-update/expert-out-update.page';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
import { ExpertInInsertPage } from './expert-in-insert/expert-in-insert.page';
import { HttpClientModule } from '@angular/common/http';
import { MajorInsertPage } from './major-insert/major-insert.page';
import { DevelopsInsertPage } from './develops-insert/develops-insert.page';
import { FoodInsertPage } from './food-insert/food-insert.page';
import { PlaceInsertPage } from './place-insert/place-insert.page';
import { BankInsertPage } from './bank-insert/bank-insert.page';
import { Http, HttpModule } from '@angular/http'
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
<<<<<<< HEAD

=======
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillInsertPage } from './skill-insert/skill-insert.page';
import { ExpertTypeInsertPage } from './expert-type-insert/expert-type-insert.page';
<<<<<<< HEAD

import { FoodUpdatePage } from './food-update/food-update.page';
import { DevelopsUpdatePage } from './develops-update/develops-update.page';

=======
import { FoodUpdatePage } from './food-update/food-update.page';
import { PlaceUpdatePage } from './place-update/place-update.page';
import { BankUpdatePage } from './bank-update/bank-update.page';
import { ExpertInUpdatePage } from "./expert-in-update/expert-in-update.page"
import { MajorUpdatePage } from './major-update/major-update.page';
import { ExpertTypeUpdatePage } from './expert-type-update/expert-type-update.page'
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
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
<<<<<<< HEAD
    DevelopsUpdatePage
=======
    PlaceUpdatePage,
    BankUpdatePage,
    MajorUpdatePage,
    ExpertInUpdatePage,
    ExpertOutInsertPage,
    ExpertOutUpdatePage
    FoodUpdatePage,
    ExpertTypeUpdatePage
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
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
<<<<<<< HEAD
    DevelopsUpdatePage
=======
    PlaceUpdatePage,
    BankUpdatePage,
    MajorUpdatePage,
    ExpertInUpdatePage,
    ExpertOutInsertPage,
    ExpertOutUpdatePage
    FoodUpdatePage,
    ExpertTypeUpdatePage
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> 69258dc849e25398873b057b31e346b51c1e9e4b
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
