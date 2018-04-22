import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabCardComponent } from './vocab-card/vocab-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VocabListComponent,
    VocabCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
