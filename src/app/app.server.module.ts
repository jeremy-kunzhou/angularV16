import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [AppModule, ServerModule, ProductsModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
