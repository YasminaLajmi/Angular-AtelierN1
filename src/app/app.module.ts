import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './components/list-fournisseur/list-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    ListFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
