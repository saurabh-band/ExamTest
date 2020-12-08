import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { itemComponent } from './Item/itab.component';
import { IformComponent } from './Item/iform.component';
import { FormsModule } from '@angular/forms';
import { itemService } from './item.service';

@NgModule({
  declarations: [
    AppComponent,itemComponent,IformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [itemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
