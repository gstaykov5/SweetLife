import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './container/contacts/contacts.component';
import { DeliveryComponent } from './container/delivery/delivery.component';
import { HomeComponent } from './container/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ImageListComponent } from './container/images/image-list/image-list.component';
import { BaptismImagesComponent } from './container/images/baptism-images/baptism-images.component';
import { WeddingImagesComponent } from './container/images/wedding-images/wedding-images.component';
import { PartyImagesComponent } from './container/images/party-images/party-images.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'image-list', component: ImageListComponent },
  { path: 'baptism-images', component: BaptismImagesComponent },
  { path: 'wedding-images', component: WeddingImagesComponent },
  { path: 'party-images', component: PartyImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
