import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOneComponent } from './components/headers/header-one/header-one.component';
import { HeaderTwoComponent } from './components/headers/header-two/header-two.component';
import { HeaderThreeComponent } from './components/headers/header-three/header-three.component';
import { FooterOneComponent } from './components/footers/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/footers/footer-two/footer-two.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FashionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
