import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { DynamiccartComponent } from './dynamiccart/dynamiccart.component';
import { TableInteractionComponent } from './table-interaction/table-interaction.component';
import { MaintableComponent } from './table-interaction/maintable/maintable.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    DynamiccartComponent,
    TableInteractionComponent,
    MaintableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
