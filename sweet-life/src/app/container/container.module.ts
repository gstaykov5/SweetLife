import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageDetailsComponent } from './images/image-details/image-details.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { SubsectionListComponent } from './images/subsection-list/subsection-list.component';


@NgModule({
  declarations: [DeliveryComponent, ContactsComponent, HomeComponent, ImageListComponent, ImageDetailsComponent, SubsectionListComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    RouterModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    DeliveryComponent,
    ContactsComponent,
    HomeComponent,
    ImageListComponent
  ]
})
export class ContainerModule { }
