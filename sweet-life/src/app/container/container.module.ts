import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { GoogleMapsModule } from '@angular/google-maps';

import { ContainerRoutingModule } from './container-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageDetailsComponent } from './images/image-details/image-details.component';
import { BaptismImagesComponent } from './images/baptism-images/baptism-images.component';
import { WeddingImagesComponent } from './images/wedding-images/wedding-images.component';
import { PartyImagesComponent } from './images/party-images/party-images.component';


@NgModule({
  declarations: 
    [DeliveryComponent,
    ContactsComponent,
    HomeComponent,
    ImageListComponent,
    ImageDetailsComponent,
    BaptismImagesComponent,
    WeddingImagesComponent,
    PartyImagesComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    ContainerRoutingModule,
    RouterModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    DeliveryComponent,
    ContactsComponent,
    HomeComponent,
    ImageListComponent,
    ImageDetailsComponent,
    BaptismImagesComponent,
  ]
})
export class ContainerModule { }
