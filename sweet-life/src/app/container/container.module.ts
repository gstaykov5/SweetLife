import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageDetailsComponent } from './images/image-details/image-details.component';
// import { HttpClientModule} from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [DeliveryComponent, ContactsComponent, HomeComponent, ImageListComponent, ImageDetailsComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    RouterModule
    // HttpClientModule,
    // AgmCoreModule.forRoot({ apiKey: 'AIzaSyB8aQq2TPp2cp5QMPTmcCCs7bOKDYcEQuA'})
  ],
  exports: [
    DeliveryComponent,
    ContactsComponent,
    HomeComponent,
    ImageListComponent
  ]
})
export class ContainerModule { }
