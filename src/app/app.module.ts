import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {AccountComponent} from './components/account/account.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {BrewState} from "./store/brew.state";
import {HttpClientModule} from "@angular/common/http";
import { AnalysisComponent } from './components/analysis/analysis.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TableComponent } from './components/table/table.component';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    AccountComponent,
    TabsComponent,
    AnalysisComponent,
    FiltersComponent,
    TableComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([BrewState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
