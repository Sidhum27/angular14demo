import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    const customElement1 = createCustomElement(HomeComponent, { injector: this.injector });
    const customElement2 = createCustomElement(AboutComponent, { injector: this.injector });
    customElements.define('app-message', customElement);
    customElements.define('app-comp-home', customElement1);
    customElements.define('app-comp-about', customElement2);
  }

}
