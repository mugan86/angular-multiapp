import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

// List of providers
const providers = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App2Module { }

@NgModule({})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders<App2Module> {
    return {
      ngModule: App2Module,
      providers
    };
  }
}
