import { UpdatePhoneComponent } from './person/pages/update-phone/update-phone.component';
import { PersonListComponent } from './person/pages/person-list/person-list.component';
import { CreatePersonPhoneComponent } from './person/pages/create-person-phone/create-person-phone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonPhoneListComponent } from './person/pages/person-phone-list/person-phone-list.component';

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'phones/:id', component: PersonPhoneListComponent},
  {path: 'phone/create/:id', component: CreatePersonPhoneComponent}
  {path: 'phone/update/:id/:number/:type', component: UpdatePhoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
