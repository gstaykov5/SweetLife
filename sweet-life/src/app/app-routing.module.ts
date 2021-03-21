import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './container/contacts/contacts.component';
import { DeliveryComponent } from './container/delivery/delivery.component';
import { HomeComponent } from './container/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ImageListComponent } from './container/images/image-list/image-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'image-list', component: ImageListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
