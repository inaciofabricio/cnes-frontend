import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { ImportarComponent } from './importar/importar.component';

import { ImportarService } from './importar/importar.service';
import { EstabelecimentoService } from './estabelecimento/estabelecimento.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImportarComponent,
    EstabelecimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ImportarService,
    EstabelecimentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
