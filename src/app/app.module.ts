import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RestApiProvider } from 'src/app/provider/RestApiProvider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person/pages/person-list/person-list.component';
import { PersonPhoneListComponent } from './person/pages/person-phone-list/person-phone-list.component';
import { CreatePersonPhoneComponent } from './person/pages/create-person-phone/create-person-phone.component';
import { FormsModule } from '@angular/forms';
import { UpdatePhoneComponent } from './person/pages/update-phone/update-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonPhoneListComponent,
    CreatePersonPhoneComponent,
    UpdatePhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    RestApiProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
