import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './Mycomponents/service/service.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { ApiComponent } from './Mycomponents/api/api.component';
import { ModelComponent } from './Mycomponents/model/model.component';
import { AdminlistComponent } from './Mycomponents/adminlist/adminlist.component';
import { UserlistComponent } from './Mycomponents/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    FooterComponent,
    ApiComponent,
    ModelComponent,
    AdminlistComponent,
    UserlistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
